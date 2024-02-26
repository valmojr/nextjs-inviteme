export default function DiscordAvatarParser(discordId: string, userAvatar: string): string {
    return `https://cdn.discordapp.com/avatars/${discordId}/${userAvatar}.png`
}

export function DiscordGuildMemberAvatarParser(discordId: string, userAvatar: string): string {
    return `https://cdn.discordapp.com/avatars/${discordId}/${userAvatar}.png`
}

export function DiscordGuildIconParser(guildId: string, guildIcon: string): string {
    return `https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.png`
}