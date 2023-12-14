'use strict';

import { GetToken, GetUser } from '@/app/functions/authentication/OAuth2';

export default async function GetUserInfo({ code }: { code: string }) {
	const response = await GetToken(code);
	const user = await GetUser(response);

	return (
		<>
			<h1>
				{'CLIENT ID: ' +
					JSON.stringify(process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID)}
			</h1>
			<h1>{'RESPONSE: ' + JSON.stringify(response)}</h1>
			<h1>{'USER: ' + JSON.stringify(user)}</h1>
		</>
	);
}
