import GenerateJWT from '@/app/functions/authentication/GenerateJWT';
import { GetToken, GetUser } from '@/app/functions/authentication/OAuth2';
import Avatar from '@/app/ui/util/Avatar';
import SecondTitle from '@/app/ui/util/Text/SecondTitle';

export default async function Page({ params }: { params: { id: string } }) {
	const access_info = await GetToken(params.id);
	const user = await GetUser(access_info);
	const jwt = GenerateJWT(user);

	return (
		<>
			<Avatar profile={user} size={'large'} border={'circle'} />
			<SecondTitle
				className={'text-center'}
			>{`Logged in as ${user.global_name}!`}</SecondTitle>
		</>
	);
}
