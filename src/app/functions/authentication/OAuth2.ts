import DiscordUser from "../types/DiscordUser";

export type TokenResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

export async function GetToken(code: string) {
    const api_url = 'https://discord.com/api/oauth2/token';
    const body = new URLSearchParams();
    body.append('client_id', process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || '');
    body.append('client_secret', process.env.DISCORD_CLIENT_SECRET || '');
    body.append('grant_type', 'authorization_code');
    body.append('code', code);
    body.append('redirect_uri', process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || '');
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    const response = await fetch(api_url, {
        method: 'POST',
        headers,
        body,
    });

    const token = await response.json() as TokenResponse;
    
    return token;
}

export async function GetUser({access_token}: TokenResponse) {
    const api_url = 'https://discord.com/api/users/@me';
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${access_token}`);

    const response = await fetch(api_url, {
        method: 'GET',
        headers,
    });

    const user = await response.json() as DiscordUser;
    
    return user;
}