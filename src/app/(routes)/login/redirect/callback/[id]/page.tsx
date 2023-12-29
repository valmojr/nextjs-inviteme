import HttpResponses from '@/app/functions/API/HttpResponses';
import {
	GetToken,
	GetUser,
} from '@/app/functions/authentication/DiscordOAuth2';
import DiscordUser from '@/app/functions/types/DiscordUser';
import DiscordAvatarParser from '@/app/functions/util/DiscordAvatarParser';
import CookieParser from '@/app/ui/authentication/CookieParser';
import Avatar from '@/app/ui/util/Avatar';
import SecondTitle from '@/app/ui/util/Text/SecondTitle';

export default async function Page({ params }: { params: { id: string } }) {
	const access_info = await GetToken(params.id);
	const {
		id,
		username,
		avatar,
		email,
		banner_color,
		global_name,
	}: DiscordUser = await GetUser(access_info);
	const url = `${process.env.ENVIRONMENT_URI}/api/auth/discord/me`;

	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			user: { id, username, avatar, email, banner_color, global_name },
		}),
	});

	if (!response.ok) {
		throw new HttpResponses().BadRequest();
	}

	const fetchedCookies = response.headers.get('set-cookie');

	return (
		<>
			<Avatar
				image={DiscordAvatarParser(id || '', avatar)}
				size={'large'}
				border={'circle'}
			/>
			<SecondTitle
				className={'text-center'}
			>{`Logged in as ${global_name}!`}</SecondTitle>
			<CookieParser cookies={fetchedCookies as string} />
		</>
	);
}
