'use server';

import prisma from '../Database';
import { Event, House, User } from '@prisma/client';

export async function create(data: House) {
	return await prisma.house.create({ data });
}

export async function get() {
	return await prisma.house.findMany();
}

export async function getById(id: string) {
	return await prisma.house.findUnique({ where: { id } });
}

export async function getByHouse(house: House) {
	return await prisma.house.findUnique({ where: { id: house.id } });
}

export async function getByUser(user: User) {
	return await prisma.house.findMany({
		where: { users: { some: { id: user.id } } },
	});
}

export async function getByUserId(userId: string) {
	return await prisma.house.findMany({
		where: { users: { some: { id: userId } } },
	});
}

export async function getByEvent(event: Event) {
	return await prisma.house.findMany({
		where: { events: { some: { id: event.id } } },
	});
}

export async function getByEventId(eventId: string) {
	return await prisma.house.findMany({
		where: { events: { some: { id: eventId } } },
	});
}

export async function update(data: Partial<House>) {
	return await prisma.house.update({ where: { id: data.id }, data });
}

export async function remove(id: string) {
	return await prisma.house.delete({ where: { id } });
}

const HouseDTO = {
	create,
	get,
	getById,
	getByHouse,
	getByUser,
	getByUserId,
	getByEvent,
	getByEventId,
	update,
	remove,
};

export default HouseDTO;
