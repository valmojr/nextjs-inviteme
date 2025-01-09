'use server';

import prisma from '../Database';
import { Event, House, User } from '@prisma/client';

export async function createHouse(data: House) {
	return await prisma.house.create({ data });
}

export async function getAllHouses() {
	return await prisma.house.findMany();
}

export async function getHouseById(id: string) {
	return await prisma.house.findUnique({ where: { id } });
}

export async function getHouseByName(name: string) {
	return await prisma.house.findMany({ where: { name: { contains: name } } });
}

export async function getHouseByHouse(house: House) {
	return await prisma.house.findUnique({ where: { id: house.id } });
}

export async function getHouseByUser(user: User) {
	return await prisma.house.findMany({
		where: { users: { some: { id: user.id } } },
	});
}

export async function getHouseByUserId(userId: string) {
	return await prisma.house.findMany({
		where: { users: { some: { id: userId } } },
	});
}

export async function getHouseByEvent(event: Event) {
	return await prisma.house.findMany({
		where: { events: { some: { id: event.id } } },
	});
}

export async function getHouseByEventId(eventId: string) {
	return await prisma.house.findMany({
		where: { events: { some: { id: eventId } } },
	});
}

export async function updateHouse(data: Partial<House>) {
	return await prisma.house.update({ where: { id: data.id }, data });
}

export async function removeHouse(id: string) {
	return await prisma.house.delete({ where: { id } });
}
