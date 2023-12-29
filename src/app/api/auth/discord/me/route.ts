import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';
import { User } from '@prisma/client';
import StreamToBuffer from '@/app/functions/util/GetStreamData';
import { NextApiResponse } from 'next';
import HttpResponse from '@/app/functions/API/HttpResponses';

type ResponseData = {
	status: number;
	headers: { 'Content-Type': string };
	message?: string;
	body: { status: number; user: User };
};

function userCheck(user: any) {
	if (!user) return false;
	if (!user?.id) return false;
	if (!user?.username) return false;
	if (!user?.avatar) return false;
	if (!user?.email) return false;
	if (!user?.banner_color) return false;
	if (!user?.global_name) return false;
	return true;
}

async function handler(req: NextRequest, res: NextApiResponse<ResponseData>) {
	const body = JSON.parse(await StreamToBuffer(req?.body));

	if (!userCheck(body?.user)) {
		return new HttpResponse().BadRequest();
	}

	const { id, username, avatar, email, banner_color, global_name } =
		body?.user;

	const user: User = {
		id,
		username,
		avatar,
		email,
		bannerColor: banner_color,
		displayName: global_name,
		createdAt: new Date(),
		updatedAt: new Date(),
		password: null,
	};

	const jwt = sign(user, process.env.AUTH_SECRET as string);

	cookies().set('token', jwt, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		maxAge: 31536000,
		secure: true,
	});

	const response = new HttpResponse().Ok({
		user,
	});

	return response;
}

export const POST = handler;

function UnauthorizedMethod() {
	return new HttpResponse().UnauthorizedMethod();
}

export {
	UnauthorizedMethod as GET,
	UnauthorizedMethod as PUT,
	UnauthorizedMethod as PATCH,
	UnauthorizedMethod as DELETE,
};
