'use server';

import GenerateJWT from '@/app/functions/authentication/GenerateJWT';
import { GetToken, GetUser } from '@/app/functions/authentication/OAuth2';
import { cookies } from 'next/headers';

export default async function GetUserInfo({ code }: { code: string }) {
	const response = await GetToken(code);
	const user = await GetUser(response);
	const jwt = await GenerateJWT(user);

	cookies().set('token', jwt, { secure: true });

	return (
		<>
			<h1>{'JWT: ' + jwt}</h1>
		</>
	);
}
