'use server';

import { User } from '@prisma/client';
import Verify from './Verify';

export default async function Authenticate(bearerToken: string | null) {
	if (!bearerToken) return false;

	const token = bearerToken.split(' ')[1];

	const user = Verify(token) as User;

	return user;
}
