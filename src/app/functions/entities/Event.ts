'use server';

import prisma from '../Database';
import { Event, User, House } from '@prisma/client';

export async function createEvent(data: Event) {
	return await prisma.event.create({ data });
}

export async function getAllEvents() {
	return await prisma.event.findMany();
}

export async function getEventById(id: string) {
	return await prisma.event.findUnique({ where: { id } });
}

export async function getEventByTitle(name: string) {
	return await prisma.event.findMany({ where: { name } });
}

export async function getEventByEvent(event: Event) {
	return await prisma.event.findUnique({ where: { id: event.id } });
}

export async function getEventByOwner(user: User) {
	return await prisma.event.findMany({ where: { ownerID: user.id } });
}

export async function getEventByOwnerId(userId: string) {
	return await prisma.event.findMany({ where: { ownerID: userId } });
}

export async function getEventByHouse(house: House) {
	return await prisma.event.findMany({
		where: { House: { some: { id: house.id } } },
	});
}

export async function getEventByHouseId(houseId: string) {
	return await prisma.event.findMany({
		where: { House: { some: { id: houseId } } },
	});
}

export async function getEventByUser(user: User) {
	return await prisma.event.findMany({
		where: { users: { some: { id: user.id } } },
	});
}

export async function getEventByUserId(userId: string) {
	return await prisma.event.findMany({
		where: { users: { some: { id: userId } } },
	});
}

export async function updateEvent(data: Partial<Event>) {
	return await prisma.event.update({ where: { id: data.id }, data });
}

export async function removeEvent(id: string) {
	return await prisma.event.delete({ where: { id } });
}
