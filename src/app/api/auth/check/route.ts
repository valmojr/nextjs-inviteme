import HttpResponse from '@/app/functions/API/HttpResponses';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

async function Handler(req: Request) {
	const jwt = cookies().get('token');
	if (req.method !== 'POST') {
		return new HttpResponse().UnauthorizedMethod();
	}
	if (!jwt) {
		return new HttpResponse().Unauthorized();
	} else {
		const jsonwebtoken = verify(
			`${jwt}`,
			process.env.JWT_SECRET as string
		) as string;
		if (!jsonwebtoken) {
			return new HttpResponse().Unauthorized();
		}

		const { user } = JSON.parse(jsonwebtoken);

		return new HttpResponse().Ok({
			status: 200,
			message: 'authorized',
			user,
		});
	}
}

export {
	Handler as GET,
	Handler as POST,
	Handler as PUT,
	Handler as PATCH,
	Handler as DELETE,
};
