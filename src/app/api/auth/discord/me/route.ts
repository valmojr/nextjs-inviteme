import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';
import { User } from '@prisma/client';
import StreamToBuffer from '@/app/functions/util/GetStreamData';
import HttpResponse from '@/app/functions/API/HttpResponses';
import { randomUUID } from 'crypto';
import DiscordUser from '@/app/functions/types/DiscordUser';
import { createUser, getUserByDiscordId } from '@/app/functions/entities/User';

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

async function handler(req: Request) {
	const body = JSON.parse(await StreamToBuffer(req?.body));

	if (!userCheck(body?.user)) {
		return new HttpResponse().BadRequest();
	}

	const fetchedUser: DiscordUser = body?.user;

	const userData: User = {
		id: randomUUID(),
		discordId: fetchedUser.id,
		username: fetchedUser.username,
		avatar: fetchedUser.avatar,
		email: fetchedUser.email,
		bannerColor: fetchedUser.banner_color,
		displayName: fetchedUser.global_name,
		createdAt: new Date(),
		updatedAt: new Date(),
		password: null,
	};

	let user: User | undefined;

	try {
		user = await getUserByDiscordId(fetchedUser.id) as User;

		if (!user) {
			user = await createUser(userData);
			if (!user) {
				throw new Error('Failed to upsert user');
			}
		}
		console.log(user);
	} catch (error) {
		console.error(error);
	}

	const jwt = sign(user || '', process.env.AUTH_SECRET as string);

	cookies().set('token', jwt, {
		path: '/',
		httpOnly: false,
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
