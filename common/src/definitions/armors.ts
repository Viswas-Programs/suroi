import { ItemType, ObjectDefinitions, type ItemDefinition } from "../utils/objectDefinitions";

export interface ArmorDefinition extends ItemDefinition {
    readonly itemType: ItemType.Armor
    readonly armorType: ArmorType
    readonly level: number
    readonly damageReduction: number
}

export enum ArmorType {
    Helmet,
    Vest
}

export const Armors = new ObjectDefinitions<ArmorDefinition>([
    {
        idString: "basic_helmet",
        name: "அடிப்படையான தலைகவசம்",
        itemType: ItemType.Armor,
        armorType: ArmorType.Helmet,
        level: 1,
        damageReduction: 0.1
    },
    {
        idString: "regular_helmet",
        name: "வழக்கமான தலைகவசம்",
        itemType: ItemType.Armor,
        armorType: ArmorType.Helmet,
        level: 2,
        damageReduction: 0.15
    },
    {
        idString: "tactical_helmet",
        name: "தந்திரோபாய தலைகவசம்",
        itemType: ItemType.Armor,
        armorType: ArmorType.Helmet,
        level: 3,
        damageReduction: 0.2
    },
    //
    // Vests
    //
    {
        idString: "basic_vest",
        name: "அடிப்படையான உடுப்பு",
        itemType: ItemType.Armor,
        armorType: ArmorType.Vest,
        level: 1,
        damageReduction: 0.2
    },
    {
        idString: "regular_vest",
        name: "வழக்கமான உடுப்பு",
        itemType: ItemType.Armor,
        armorType: ArmorType.Vest,
        level: 2,
        damageReduction: 0.35
    },
    {
        idString: "tactical_vest",
        name: "தந்திரோபாய உடுப்பு",
        itemType: ItemType.Armor,
        armorType: ArmorType.Vest,
        level: 3,
        damageReduction: 0.45
    }
]);
