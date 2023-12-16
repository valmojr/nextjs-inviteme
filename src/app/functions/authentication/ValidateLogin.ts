import { User } from '@prisma/client';
import { UserDTO } from '../entities/User/User';

export async function validateLogin(loginData: {
	username: string;
	password: string;
}): Promise<User> {
	const userDTO = new UserDTO();

	const fetchedUsername = await userDTO.getByUsername(loginData.username);

	if (!fetchedUsername) {
		throw new Error('User not found');
	}

	if (fetchedUsername.password === loginData.password) {
		return fetchedUsername;
	} else {
		throw new Error('Wrong password provided');
	}
}
