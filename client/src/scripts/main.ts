import $ from "jquery";
import { Color } from "pixi.js";
import "../../node_modules/@fortawesome/fontawesome-free/css/brands.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/solid.css";
import { Config } from "./config";
import { Game } from "./game";
import { stringIsPositiveNumber } from "./utils/misc";
import { loadTextures } from "./utils/pixi";

const playButton: JQuery = $("#btn-play-solo");

export function enablePlayButton(): void {
    playButton.removeClass("btn-disabled").prop("disabled", false).text("விளையாடு");
}

function disablePlayButton(text: string): void {
    playButton.addClass("btn-disabled").prop("disabled", true)
        .html(`<span style="position: relative; bottom: 1px;"><div class="spin"></div>${text}</span>`);
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
$(async(): Promise<void> => {
    const game = new Game();

    void loadTextures().then(enablePlayButton);

    interface RegionInfo {
        name: string
        address: string
        https: boolean
        playerCount?: string
        ping?: number
    }

    const regionInfo: Record<string, RegionInfo> = Config.regions;
    const regionMap = Object.entries(regionInfo);
    const serverList = $("#server-list");

    // Load server list
    for (const [regionID, region] of regionMap) {
        const listItem = $(`
                <li class="server-list-item" data-region="${regionID}">
                    <span class="server-name">${region.name}</span>
                    <span style="margin-left: auto">
                      <img src="./img/misc/player_icon.svg" width="16" height="16" alt="Player count">
                      <span class="server-player-count">-</span>
                    </span>
                </li>
            `);
        /* <span style="margin-left: 5px">
          <img src="./img/misc/ping_icon.svg" width="16" height="16" alt="Ping">
          <span class="server-ping">-</span>
        </span> */
        serverList.append(listItem);
    }

    // Get player counts + find server w/ best ping
    let bestPing = Number.MAX_VALUE;
    let bestRegion: string | undefined;
    const loadServers = async(): Promise<void> => {
        for (const [regionID, region] of regionMap) {
            const listItem = $(`.server-list-item[data-region=${regionID}]`);
            try {
                const pingStartTime = Date.now();
                let playerCount = await (await fetch(`http${region.https ? "s" : ""}://${region.address}/api/playerCount`, { signal: AbortSignal.timeout(2000) })
                    .catch(() => {
                        console.error(`Could not load player count for ${region.address}.`);
                    })
                )?.text();
                playerCount = playerCount && stringIsPositiveNumber(playerCount) ? playerCount : "-";

                const ping = Date.now() - pingStartTime;
                regionInfo[regionID] = {
                    ...region,
                    playerCount,
                    ping: playerCount !== "-" ? ping : -1
                };

                listItem.find(".server-player-count").text(playerCount);
                // listItem.find(".server-ping").text(typeof playerCount === "string" ? ping : "-");

                if (ping < bestPing) {
                    bestPing = ping;
                    bestRegion = regionID;
                }
            } catch (e) {
                listItem.addClass("server-list-item-disabled");
                console.error(`Failed to fetch player count for region ${regionID}. Details:`, e);
            }
        }
    };

    let selectedRegion: RegionInfo;

    const updateServerSelector = (): void => {
        if (!selectedRegion) { // Handle invalid region
            selectedRegion = regionInfo[Config.defaultRegion];
            game.console.setBuiltInCVar("cv_region", "");
        }
        $("#server-name").text(selectedRegion.name);
        $("#server-player-count").text(selectedRegion.playerCount ?? "-");
        // $("#server-ping").text(selectedRegion.ping && selectedRegion.ping > 0 ? selectedRegion.ping : "-");
    };

    const region = game.console.getBuiltInCVar("cv_region");
    if (region) {
        void (async() => {
            await loadServers();
            selectedRegion = regionInfo[region];
            updateServerSelector();
        })();
        selectedRegion = regionInfo[region];
    } else {
        await loadServers();
        selectedRegion = regionInfo[bestRegion ?? Config.defaultRegion];
    }
    updateServerSelector();

    serverList.children("li.server-list-item").on("click", function(this: HTMLLIElement) {
        const region = this.getAttribute("data-region");
        if (region === null) return;

        const info = regionInfo[region];
        if (info === undefined) return;

        selectedRegion = info;

        game.console.setBuiltInCVar("cv_region", region);

        updateServerSelector();
    });

    let lastPlayButtonClickTime = 0;

    // Join server when play button is clicked
    playButton.on("click", () => {
        const now = Date.now();
        if (now - lastPlayButtonClickTime < 1500) return; // Play button rate limit
        lastPlayButtonClickTime = now;
        disablePlayButton("Connecting...");
        const urlPart = `${selectedRegion.https ? "s" : ""}://${selectedRegion.address}`;
        void $.get(`http${urlPart}/api/getGame`, (data: { success: boolean, message?: "rateLimit" | "warning" | "tempBan" | "permaBan", gameID: number }) => {
            if (data.success) {
                let address = `ws${urlPart}/play?gameID=${data.gameID}`;

                const devPass = game.console.getBuiltInCVar("dv_password");
                const role = game.console.getBuiltInCVar("dv_role");
                const lobbyClearing = game.console.getBuiltInCVar("dv_lobby_clearing");

                if (devPass) address += `&password=${devPass}`;
                if (role) address += `&role=${role}`;
                if (lobbyClearing) address += "&lobbyClearing=true";

                const nameColor = game.console.getBuiltInCVar("dv_name_color");
                if (nameColor) {
                    try {
                        const finalColor = new Color(nameColor).toNumber();
                        address += `&nameColor=${finalColor}`;
                    } catch (e) {
                        game.console.setBuiltInCVar("dv_name_color", "");
                        console.error(e);
                    }
                }

                game.connect(address);
                $("#splash-server-message").hide();
            } else {
                let showWarningModal = false;
                let title: string | undefined;
                let message: string;
                switch (data.message) {
                    case "rateLimit":
                        message = "விளையாட்டிள் சேர முடியவில்லை.<br>தயவுசெய்து பின்னர் முயர்சிக்கவும்";
                        break;
                    case "warning":
                        showWarningModal = true;
                        title = "மற்ற வீரர்களுடன் சேர்வது விதிமுறைகளுக்கு அப்பாரான செயலாகும்!";
                        message = "நீங்கள் மற்ற வீரர்களுடன் சேர்ந்ததற்காக புகார் வந்துள்ளது. மற்றவருடன் அதிக நெறம் சேர்ந்திருப்பது தவரு. மறுபடியும் செய்தால், தடை செய்யப்படுவீர்.";
                        break;
                    case "tempBan":
                        showWarningModal = true;
                        title = "மற்ற வீரர்களுடன் சேர்ந்ததனால் உன்மேல் ஒரு நால் தடைவிதிக்கப்பட்டது";
                        message = "மற்ற வீரர்களுடன் சேர்வது ஓரு குற்றமாகும். <br><br>தடை எடுத்தபின், இதை ரீலோட் செய்க.";
                        break;
                    case "permaBan":
                        showWarningModal = true;
                        title = "ஹாக்கிங் (hacking) செய்ததால் உன்மேல் வாழ்நால் தடை விதிக்கப்பட்டுள்ளது";
                        message = "ஸ்கிரிப்ட்ஸ், பிளகின், எக்ஸ்டென்ஷன், பயன்படுத்தி, எதிராளிகளை விட தனக்கு சாதகமாக விளையாட்டை மாற்றுவது முற்றிலும் தடை செய்யப்பட்டுள்ளது.";
                        break;
                    default:
                        message = "விளையாட்டிள் சேர முடியவில்லை<br>30 வினாடிகளிள் திரும்ப முயர்சிக்கவும்.";
                        break;
                }
                enablePlayButton();
                if (showWarningModal) {
                    $("#warning-modal-title").text(title ?? "");
                    $("#warning-modal-text").html(message ?? "");
                    $("#warning-modal-agree-options").toggle(data.message === "warning");
                    $("#warning-modal-agree-checkbox").prop("checked", false);
                    $("#warning-modal").show();
                    $("#btn-play-solo").addClass("btn-disabled");
                } else {
                    $("#splash-server-message-text").html(message);
                    $("#splash-server-message").show();
                }
            }
        }).fail(() => {
            $("#splash-server-message-text").html("Error finding game.<br>Please try again.");
            $("#splash-server-message").show();
            enablePlayButton();
        });
    });

    const params = new URLSearchParams(window.location.search);

    const nameColor = params.get("nameColor");
    if (nameColor) {
        game.console.setBuiltInCVar("dv_name_color", nameColor);
    }

    const lobbyClearing = params.get("lobbyClearing");
    if (lobbyClearing) {
        game.console.setBuiltInCVar("dv_lobby_clearing", lobbyClearing === "true");
    }

    const devPassword = params.get("password");
    if (devPassword) {
        game.console.setBuiltInCVar("dv_password", devPassword);
        location.search = "";
    }

    const role = params.get("role");
    if (role) {
        game.console.setBuiltInCVar("dv_role", role);
        location.search = "";
    }
});
