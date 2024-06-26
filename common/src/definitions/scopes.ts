﻿import { ItemType, ObjectDefinitions, type ItemDefinition } from "../utils/objectDefinitions";

export interface ScopeDefinition extends ItemDefinition {
    readonly itemType: ItemType.Scope
    readonly zoomLevel: number
    readonly giveByDefault?: boolean
}

export const Scopes = new ObjectDefinitions<ScopeDefinition>([
    {
        idString: "1x_scope",
        name: "1வது நிலை உருப்பெருக்காண்",
        itemType: ItemType.Scope,
        zoomLevel: 48,
        noDrop: true,
        giveByDefault: true
    },
    {
        idString: "2x_scope",
        name: "2வது நிலை உருப்பெருக்காண்",
        itemType: ItemType.Scope,
        zoomLevel: 62
    },
    {
        idString: "4x_scope",
        name: "4வது நிலை உருப்பெருக்காண்",
        itemType: ItemType.Scope,
        zoomLevel: 83
    },
    {
        idString: "8x_scope",
        name: "8வது நிலை உருப்பெருக்காண்",
        itemType: ItemType.Scope,
        zoomLevel: 116
    },
    {
        idString: "15x_scope",
        name: "15வது நிலை உருப்பெருக்காண்",
        itemType: ItemType.Scope,
        zoomLevel: 178
    }
]);

export const DEFAULT_SCOPE = Scopes.definitions[0];
