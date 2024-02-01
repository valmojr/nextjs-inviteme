'use server';

import { User } from '@prisma/client';
import Verify from './Verify';

export default async function Authenticate(bearerToken: string | null) {
	if (!bearerToken) return false;

	const token = bearerToken.split(' ')[1];

	try {
		return Verify(token) as User;
	} catch (error) {
		return false;
	}
}
