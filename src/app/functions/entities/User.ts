'use server';

import { User } from '@prisma/client';
import prisma from '../Database';
import DiscordUser from '../types/DiscordUser';
import { randomUUID } from 'crypto';

export async function create(data: User) {
	return await prisma.user.create({ data });
}

export async function get() {
	return await prisma.user.findMany();
}

export async function getById(id: string) {
	return await prisma.user.findUnique({ where: { id } });
}

export async function getByDiscordId(discordId: string) {
	return await prisma.user.findUnique({ where: { discordId } });
}

export async function getByUser(user: User) {
	return await prisma.user.findUnique({ where: { id: user.id } });
}

export async function getByDiscordUser(user: DiscordUser) {
	return await prisma.user.upsert({
		where: { discordId: user.id },
		update: {
			username: user.username,
			avatar: user.avatar,
			email: user.email,
			bannerColor: user.banner_color,
			displayName: user.global_name,
			updatedAt: new Date(),
		},
		create: {
			id: randomUUID(),
			discordId: user.id,
			username: user.username,
			avatar: user.avatar,
			email: user.email,
			bannerColor: user.banner_color,
			displayName: user.global_name,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	});
}

export async function getByHouseId(houseId: string) {
	return await prisma.user.findMany({
		where: { houses: { some: { id: houseId } } },
	});
}

export async function getByEventId(eventId: string) {
	return await prisma.user.findMany({
		where: { events: { some: { id: eventId } } },
	});
}

export async function getByEmail(email: string) {
	return await prisma.user.findUnique({ where: { email } });
}

export async function update(data: Partial<User>) {
	return await prisma.user.update({ where: { id: data.id }, data });
}

export async function remove(id: string) {
	return await prisma.user.delete({ where: { id } });
}

const UserDTO = {
	create,
	get,
	getById,
	getByDiscordId,
	getByUser,
	getByDiscordUser,
	getByHouseId,
	getByEventId,
	getByEmail,
	update,
	remove,
};

export default UserDTO;
