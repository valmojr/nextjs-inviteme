'use server';

import prisma from '../Database';
import { Event, User, House } from '@prisma/client';

export async function create(data: Event) {
	return await prisma.event.create({ data });
}

export async function get() {
	return await prisma.event.findMany();
}

export async function getById(id: string) {
	return await prisma.event.findUnique({ where: { id } });
}

export async function getByEvent(event: Event) {
	return await prisma.event.findUnique({ where: { id: event.id } });
}

export async function getByOwner(user: User) {
	return await prisma.event.findMany({ where: { ownerID: user.id } });
}

export async function getByOwnerId(userId: string) {
	return await prisma.event.findMany({ where: { ownerID: userId } });
}

export async function getByHouse(house: House) {
	return await prisma.event.findMany({
		where: { House: { some: { id: house.id } } },
	});
}

export async function getByHouseId(houseId: string) {
	return await prisma.event.findMany({
		where: { House: { some: { id: houseId } } },
	});
}

export async function getByUser(user: User) {
	return await prisma.event.findMany({
		where: { users: { some: { id: user.id } } },
	});
}

export async function getByUserId(userId: string) {
	return await prisma.event.findMany({
		where: { users: { some: { id: userId } } },
	});
}

export async function update(data: Partial<Event>) {
	return await prisma.event.update({ where: { id: data.id }, data });
}

export async function remove(id: string) {
	return await prisma.event.delete({ where: { id } });
}
