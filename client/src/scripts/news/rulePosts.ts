/* eslint-disable quotes,@typescript-eslint/quotes */
export interface RulesPost {
    date: number
    author: string
    title: string
    content: string
    longContent?: string
}

export const rules: RulesPost[] = [
    {
        date: 1690908230000,
        author: "Katloo",
        title: "Rules",
        content: `இந்த விளையாட்டை விளையாடுவதன் மூலம் நீங்கள் விதிமுறைகளை ஏற்றுக்கொள்கிறீர்கள். விதிமுறைகளை மீறுவது தடைக்கு வழிவகுக்கும்.`,
        longContent: `<ul>
  <li><strong>ஒற்றை வீரர் முறையில் குழு சேரதல் கூடாது.</strong> ஒற்றை வீரர்கள் ஓட அதிக நேரதுகு செண்டு விளையாட கூடாது.</li>
  <li><strong>ஹாக்கின்க் பண்ணக்கூடாது.</strong> ஸ்கிரிப்ட்ஸ், பிளகின், எக்ஸ்டென்ஷன், பயன்படுத்தி, எதிராளிகளை விட சாதகமாக விளையாட்டை மாற்றுவது முற்றிலும் தடை செய்யப்பட்டுள்ளது.</li>
  <li><strong>பொருத்தமில்லாத பயன்பட்ட பெயர்கள் vெச்சுக்க kூடாது</strong> நம்மளோட தடைப் பட்டியல்கள் மிகவும் தளர்வானவாக இருக்கு. ஆனால் சில விஷயங்களுக்கு இன்னும் தடை விதிக்கப்பட்டிருக்கு. இந்த குறிப்பிட்ட வார்த்தைகளுக்கான வடிகட்டிகளை தாண்டி செயல்படப் பார்க்கிறீர்கனா, அப்போ விளைவுகள் வரலாம். </li>
</ul>`
    },
    {
        date: 1690908230000,
        author: "Katloo",
        title: "Tutorial",
        content: `If you're a new player, check out this tutorial to learn how to play!`,
        longContent: `<h2>Controls</h2>
<p>Movement - WASD or Arrow Keys</p>
<p>Aim - Mouse</p>
<p>Attack - Left-Click</p>
<p>Change Weapons - 1 through 3 or Scroll Wheel</p>
<p>Pickup/Loot/Interact - F</p>
<p>Reload - R</p>
<p>Use Healing Item - Left-Click on item or 7 through 0</p>
<p>Cancel Action - X</p>
<p>Toggle Fullscreen Map - G or M</p>
<p>Toggle Minimap - N</p>
<p>Use Emote Wheel - Hold Right-Click, drag, and release</p>
<p>Drop Item - Right-Click on item</p>
<p>Equip Last Item - Q</p>
<p>Swap Gun Slots - T</p>
<p>Equip Other Gun - Space</p>
<p>Change Scope Zoom - Left-Click on Scope</p>

<h3>Keybinds can be changed in settings!</h3>

<h2>How to Play</h2>
<p>The goal of Suroi is to be the last player standing. You'll start with nothing, so move around the map to get weapons, scopes, armor, healing items, and ammo. If you see another player, eliminate them for their loot!</p>

<h2>Orange = Bad</h2>
<p>You have another enemy to watch out for: a deadly orange gas. The gas slowly fills the map as the game progresses, making the safe zone smaller and smaller. The damage increases each time it shrinks.</p>

<h2>Similar Games</h2>
<p>If you've played games like PUBG, Fortnite, and Apex Legends, or other browser battle royales like surviv.io and zombsroyale.io, you might be familiar with the concept of the game!</p>
`
    }
];
