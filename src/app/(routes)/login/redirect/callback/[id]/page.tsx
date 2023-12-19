import GenerateJWT from '@/app/functions/authentication/GenerateJWT';
import { GetToken, GetUser } from '@/app/functions/authentication/OAuth2';
import DiscordAvatarParser from '@/app/functions/util/DiscordAvatarParser';
import Avatar from '@/app/ui/util/Avatar';
import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import ThirdTitle from '@/app/ui/util/Text/ThirdTitle';

export default async function Page({ params }: { params: { id: string } }) {
	const access_info = await GetToken(params.id);
	const user = await GetUser(access_info);

	return (
		<>
			<FirstTitle>{user.username}</FirstTitle>
			<ThirdTitle>{user.id}</ThirdTitle>
			<ThirdTitle>{user.email}</ThirdTitle>
			<Avatar profile={user} />
		</>
	);
}
