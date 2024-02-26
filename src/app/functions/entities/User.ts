'use server';

import { User } from '@prisma/client';
import prisma from '../Database';
import DiscordUser from '../types/DiscordUser';
import HttpResponses from '../API/HttpResponses';

export async function createUser(data: User) {
	return await prisma.user.create({ data });
}

export async function getUser() {
	return await prisma.user.findMany();
}

export async function getUserById(id: string) {
	return await prisma.user.findUnique({ where: { id } });
}

export async function getUserByDiscordId(discordId: string) {
	return await prisma.user.findUnique({ where: { discordId } });
}

export async function getUserByUser(user: User) {
	return await prisma.user.findUnique({ where: { id: user.id } });
}

export async function getUserByName(username: string) {
	return await prisma.user.findMany({
		where: { username: { contains: username } },
	});
}

export async function getUserByDiscordUser(user: DiscordUser) {
	return await prisma.user.findUnique({ where: { discordId: user.id } });
}

export async function getUserByHouseId(houseId: string) {
	return await prisma.user.findMany({
		where: { houses: { some: { id: houseId } } },
	});
}

export async function getUserByEventId(eventId: string) {
	return await prisma.user.findMany({
		where: { events: { some: { id: eventId } } },
	});
}

export async function getUserByEmail(email: string) {
	return await prisma.user.findUnique({ where: { email } });
}

export async function upsertUser(data: User) {
	if (!data.id || !data.username) {
		return new HttpResponses().BadRequest('Invalid user data provided');
	}
	return await prisma.user.upsert({ where: { id: data.id }, update: data, create: data });
}

export async function updateUser(data: Partial<User>) {
	return await prisma.user.update({ where: { id: data.id }, data });
}

export async function removeUser(id: string) {
	return await prisma.user.delete({ where: { id } });
}
