'use server';

import { User } from '@prisma/client';
import Verify from './Verify';
import { getUserById } from '../entities/User';

export default async function Authenticate(bearerToken: string | null) {
	if (!bearerToken) return false;

	const token = bearerToken.split(' ')[1];

	try {
		const userInfo = Verify(token) as User;

		const user = getUserById(userInfo.id);

		if (user) {
			return user;
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
}
