export default function DiscordAvatarParser(userId: string, userAvatar: string): string {
    return `https://cdn.discordapp.com/avatars/${userId}/${userAvatar}.png`
}

export function DiscordGuildMemberAvatarParser(userId: string, userAvatar: string): string {
    return `https://cdn.discordapp.com/avatars/${userId}/${userAvatar}.png`
}

export function DiscordGuildIconParser(guildId: string, guildIcon: string): string {
    return `https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.png`
}