import { ItemType, ObjectDefinitions, type ItemDefinition } from "../utils/objectDefinitions";

export interface HealingItemDefinition extends ItemDefinition {
    readonly itemType: ItemType.Healing
    readonly healType: HealType
    readonly restoreAmount: number
    readonly useTime: number
    readonly useText: string
}

export enum HealType {
    Health,
    Adrenaline
}

export const HealingItems = new ObjectDefinitions<HealingItemDefinition>([
    {
        idString: "gauze",
        name: "கட்டுகள்",
        itemType: ItemType.Healing,
        healType: HealType.Health,
        restoreAmount: 15,
        useTime: 3,
        useText: "போடப்படுகின்றது"
    },
    {
        idString: "medikit",
        name: "மருந்துபெட்டி",
        itemType: ItemType.Healing,
        healType: HealType.Health,
        restoreAmount: 100,
        useTime: 6,
        useText: "பயன்படுத்துவது"
    },
    {
        idString: "cola",
        name: "கோலா",
        itemType: ItemType.Healing,
        healType: HealType.Adrenaline,
        restoreAmount: 25,
        useTime: 3,
        useText: "குடிக்கப்படுகின்றது"
    },
    {
        idString: "tablets",
        name: "மாத்திரைகள்",
        itemType: ItemType.Healing,
        healType: HealType.Adrenaline,
        restoreAmount: 50,
        useTime: 5,
        useText: "முழுங்கப்படுவது"
    }
]);
