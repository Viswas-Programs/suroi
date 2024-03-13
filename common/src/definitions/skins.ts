import { ItemType, ObjectDefinitions, type ItemDefinition } from "../utils/objectDefinitions";

export interface SkinDefinition extends ItemDefinition {
    readonly itemType: ItemType.Skin
    readonly hideFromLoadout?: boolean
    readonly grassTint?: boolean
    readonly hideEquipment?: boolean
    readonly roleRequired?: string
}

export const Skins = new ObjectDefinitions<SkinDefinition>([
    {
        idString: "hasanger",
        name: "Hasanger",
        itemType: ItemType.Skin,
        roleRequired: "hasanger"
    },
    {
        idString: "leia",
        name: "Leia",
        itemType: ItemType.Skin,
        roleRequired: "leia"
    },
    {
        idString: "limenade",
        name: "LimeNade",
        itemType: ItemType.Skin,
        roleRequired: "limenade"
    },
    {
        idString: "katie",
        name: "Katie",
        itemType: ItemType.Skin,
        roleRequired: "katie"
    },
    {
        idString: "eipi",
        name: "eiπ",
        itemType: ItemType.Skin,
        roleRequired: "eipi"
    },
    {
        idString: "123op",
        name: "123OP",
        itemType: ItemType.Skin,
        roleRequired: "123op"
    },
    {
        idString: "radians",
        name: "Radians",
        itemType: ItemType.Skin,
        roleRequired: "radians"
    },
    {
        idString: "developr",
        name: "Developr Swag",
        itemType: ItemType.Skin,
        roleRequired: "developr"
    },
    {
        idString: "designr",
        name: "Designr Swag",
        itemType: ItemType.Skin,
        roleRequired: "designr"
    },
    {
        idString: "hazel_jumpsuit",
        name: "ஹேஸல் ஜம்ப்ஸூட்",
        itemType: ItemType.Skin
    },
    {
        idString: "forest_camo",
        name: "வணத்தின் உருமறைப்பு",
        itemType: ItemType.Skin
    },
    {
        idString: "desert_camo",
        name: "பாலையின் உருமறைப்பு",
        itemType: ItemType.Skin
    },
    {
        idString: "arctic_camo",
        name: "பனியின் உருமறைப்பு",
        itemType: ItemType.Skin
    },
    {
        idString: "bloodlust",
        name: "இரத்தவெறி",
        itemType: ItemType.Skin
    },
    {
        idString: "tomato_skin",
        name: "தக்காளி",
        itemType: ItemType.Skin
    },
    {
        idString: "greenhorn",
        name: "பச்சைக்கொம்பு",
        itemType: ItemType.Skin
    },
    {
        idString: "blue_blood",
        name: "நீல இரத்தம்",
        itemType: ItemType.Skin
    },
    {
        idString: "silver_lining",
        name: "வெள்ளிப் புறணி",
        itemType: ItemType.Skin
    },
    {
        idString: "pot_o_gold",
        name: "தங்கப்பானை",
        itemType: ItemType.Skin
    },
    {
        idString: "gunmetal",
        name: "துப்பாக்கி உலோகம்",
        itemType: ItemType.Skin
    },
    {
        idString: "algae",
        name: "பாசி",
        itemType: ItemType.Skin
    },
    {
        idString: "twilight_zone",
        name: "அந்தி மண்டலம்",
        itemType: ItemType.Skin
    },
    {
        idString: "bubblegum",
        name: "Bubblegum",
        itemType: ItemType.Skin
    },
    {
        idString: "sunrise",
        name: "சூரிய உதயம்",
        itemType: ItemType.Skin
    },
    {
        idString: "sunset",
        name: "சூரிய அஸ்தமனம்",
        itemType: ItemType.Skin
    },
    {
        idString: "stratosphere",
        name: "Stratosphere",
        itemType: ItemType.Skin
    },
    {
        idString: "mango",
        name: "மாம்பழம்",
        itemType: ItemType.Skin
    },
    {
        idString: "snow_cone",
        name: "Snow Cone",
        itemType: ItemType.Skin
    },
    {
        idString: "aquatic",
        name: "Aquatic",
        itemType: ItemType.Skin
    },
    {
        idString: "floral",
        name: "Floral",
        itemType: ItemType.Skin
    },
    {
        idString: "sunny",
        name: "வெயில்",
        itemType: ItemType.Skin
    },
    {
        idString: "volcanic",
        name: "எரிமலை",
        itemType: ItemType.Skin
    },
    {
        idString: "ashfall",
        name: "Ashfall",
        itemType: ItemType.Skin
    },
    {
        idString: "solar_flare",
        name: "Solar Flare",
        itemType: ItemType.Skin
    },
    {
        idString: "beacon",
        name: "Beacon",
        itemType: ItemType.Skin
    },
    {
        idString: "wave_jumpsuit",
        name: "Wave Jumpsuit",
        itemType: ItemType.Skin
    },
    {
        idString: "toadstool",
        name: "Toadstool",
        itemType: ItemType.Skin
    },
    {
        idString: "full_moon",
        name: "முழு நிலா",
        itemType: ItemType.Skin
    },
    {
        idString: "basic_outfit",
        name: "Basic Outfit",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "swiss_cheese",
        name: "Swiss Cheese",
        itemType: ItemType.Skin
    },
    {
        idString: "target_practice",
        name: "Target Practice",
        itemType: ItemType.Skin
    },
    {
        idString: "zebra",
        name: "Zebra",
        itemType: ItemType.Skin
    },
    {
        idString: "tiger",
        name: "புலி",
        itemType: ItemType.Skin
    },
    {
        idString: "bee",
        name: "தேனி",
        itemType: ItemType.Skin
    },
    {
        idString: "armadillo",
        name: "ஆர்மடில்லோ",
        itemType: ItemType.Skin
    },
    {
        idString: "printer",
        name: "அச்சுப்பொறி",
        itemType: ItemType.Skin
    },
    {
        idString: "distant_shores",
        name: "தூரக்கரைகள்",
        itemType: ItemType.Skin
    },
    {
        idString: "peppermint",
        name: "Peppermint",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "spearmint",
        name: "Spearmint",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "coal",
        name: "நிலக்கரி",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "henrys_little_helper",
        name: "Henry's Little Helper",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "candy_cane",
        name: "மிட்டாய் கரும்பு",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "christmas_tree_skin",
        name: "கிரிஸ்துமஸ் மரம்",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "gingerbread",
        name: "இஞ்சிரொட்டி",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "verified",
        name: "Verified",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "nokilpls",
        name: "டேய் என்ன கொல்லாதடா",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "stardust",
        name: "நட்சத்திரதூசு",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "aurora",
        name: "அரோரா",
        itemType: ItemType.Skin,
        hideFromLoadout: true
    },
    {
        idString: "ghillie_suit",
        name: "கிள்ளி ஆடை",
        itemType: ItemType.Skin,
        grassTint: true,
        hideEquipment: true,
        hideFromLoadout: true
    }
]);
