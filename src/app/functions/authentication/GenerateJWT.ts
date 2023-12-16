import { UserDTO } from '@/app/functions/entities/User/User';
import DiscordUser from '@/app/functions/types/DiscordUser';
import TokenPayload from '@/app/functions/types/TokenPayload';
import DiscordAvatarParser from '@/app/functions/util/DiscordAvatarParser';
import { User } from '@prisma/client';
import JWT from 'jsonwebtoken';

export default async function GenerateJWT(user: DiscordUser | User) {
	const userDTO = new UserDTO();
	const { id, username, avatar, email } = user;
	const userOnDatabase = await userDTO.parse({
		id, username, avatar: DiscordAvatarParser(id, avatar || ''), email
	});

	if (!userOnDatabase) throw new Error(`Failed to parse ${user.username}`)
		const payload: TokenPayload = {
			id,
			username,
			avatar,
			issued_at: Math.floor(Date.now()),
			expire_date: Math.floor(Date.now() / 1000) + (3 * 24 * 60 * 60),
		};
		
		return JWT.sign(payload, process.env.JWT_SECRET || '');
}