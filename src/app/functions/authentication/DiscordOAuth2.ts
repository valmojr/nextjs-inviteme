import { getByDiscordId, getByEmail } from '../entities/User';
import DiscordUser from '../types/DiscordUser';

export type TokenResponse = {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
};

export async function GetToken(code: string) {
	const api_url = 'https://discord.com/api/oauth2/token';
	const body = new URLSearchParams();
	body.append('client_id', process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || '');
	body.append('client_secret', process.env.DISCORD_CLIENT_SECRET || '');
	body.append('grant_type', 'authorization_code');
	body.append('code', code);
	body.append(
		'redirect_uri',
		process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || ''
	);
	const headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');

	try {
		const response = await fetch(api_url, {
			method: 'POST',
			headers,
			body,
		});

		const token = (await response.json()) as TokenResponse;

		return token;
	} catch (error) {
		throw new Error(`Failed to get access token: ${error}`);
	}
}

export async function GetUser({ access_token }: TokenResponse) {
	const api_url = 'https://discord.com/api/users/@me';
	const headers = new Headers();
	headers.append('Authorization', `Bearer ${access_token}`);

	try {
		const response = await fetch(api_url, {
			method: 'GET',
			headers,
		});

		const user = (await response.json()) as DiscordUser;

		return user;
	} catch (error) {
		throw new Error(`Failed to get user: ${error}`);
	}
}

export type ProvidedData = {
	id: string;
	username: string;
	avatar: string;
	email: string;
	banner_color: string;
	global_name: string;
} & any;

export async function GetUserFromDatabase(user: ProvidedData) {
	const UserFromDiscordId = await getByDiscordId(user.id);

	if (UserFromDiscordId) {
		return UserFromDiscordId;
	} else {
		const UserFromEmail = await getByEmail(user.email);

		if (UserFromEmail) {
			return UserFromEmail;
		} else {
			throw new Error('User not found');
		}
	}
}
