import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';
import { User } from '@prisma/client';
import StreamToBuffer from '@/app/functions/util/StreamToBuffer';
import { NextApiResponse } from 'next';
import ResponseAPI from '@/app/functions/API/HttpResponses';

type ResponseData = {
	message: string;
};

function isUser(user: any): user is User {
	return user && user.id && user.username && user.displayName;
}

async function handler(req: NextRequest, res: NextApiResponse) {
	const body = JSON.parse(await StreamToBuffer(req?.body));
	const user = body?.user;

	if (!user || !isUser(user)) {
		return new ResponseAPI().Unauthorized();
	}

	const jwt = sign(user, process.env.AUTH_SECRET as string);

	cookies().set('token', jwt, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		maxAge: 31536000,
		secure: true,
	});

	const response = new NextResponse(
		JSON.stringify({
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				status: 200,
				user,
			},
		})
	);

	return response;
}

export const POST = handler;

function UnauthorizedMethod() {
	return new ResponseAPI().UnauthorizedMethod();
}

export {
	UnauthorizedMethod as GET,
	UnauthorizedMethod as PUT,
	UnauthorizedMethod as PATCH,
	UnauthorizedMethod as DELETE,
};
