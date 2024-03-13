export const Config = {
    regions: {
        dev: { name: "உங்கள் வீட்டு சர்வர்", address: "127.0.0.1:8000", https: false },
        na: { name: "வடக்கு அமெரிகா", address: "na.suroi.io", https: true },
        eu: { name: "ஐரோபா", address: "eu.suroi.io", https: true },
        sa: { name: "தெற்கு அமெரிகா", address: "sa.suroi.io", https: true },
        as: { name: "ஆசியா", address: "as.suroi.io", https: true }
    },
    defaultRegion: "na",
    mode: "normal"
} satisfies ConfigType as ConfigType;

export interface ConfigType {
    readonly regions: Record<string, {
        readonly name: string
        readonly address: string
        readonly https: boolean
    }>
    readonly defaultRegion: string
    readonly mode: string
}
