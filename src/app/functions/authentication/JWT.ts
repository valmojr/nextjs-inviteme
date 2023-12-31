'use server';

import { verify } from 'jsonwebtoken';

export default async function getAuthenticatedUser(jsonwebtoken: string) {
	return verify(jsonwebtoken, process.env.AUTH_SECRET as string);
}
