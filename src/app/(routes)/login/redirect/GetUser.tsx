import GenerateJWT from '@/app/functions/authentication/GenerateJWT';
import { GetToken, GetUser } from '@/app/functions/authentication/OAuth2';

export default async function GetUserInfo({ code }: { code: string }) {
	const response = await GetToken(code);
	const user = await GetUser(response);
	const jwt = await GenerateJWT(user);
	return (
		<>
			<h1>{'JWT: ' + jwt}</h1>
		</>
	);
}
