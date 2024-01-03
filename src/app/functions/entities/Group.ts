'use server';

import prisma from '../Database';
import { Event, Group, Role } from '@prisma/client';

export async function create(data: Group) {
	return await prisma.group.create({ data });
}

export async function get() {
	return await prisma.group.findMany();
}

export async function getById(id: string) {
	return await prisma.group.findUnique({ where: { id } });
}

export async function getByGroup(group: Group) {
	return await prisma.group.findUnique({ where: { id: group.id } });
}

export async function getByRole(role: Role) {
	return await prisma.group.findUnique({ where: { id: role.groupID } });
}

export async function getByRoleId(roleId: string) {
	return await prisma.group.findUnique({ where: { id: roleId } });
}

export async function getChildGroups(group: Group) {
	return await prisma.group.findMany({ where: { fatherGroupID: group.id } });
}

export async function getFatherGroup(group: Group) {
	return await prisma.group.findUnique({
		where: { id: group.fatherGroupID as string },
	});
}

export async function getByEvent(event: Event) {
	return await prisma.group.findMany({ where: { Event: { id: event.id } } });
}

export async function getByEventId(eventId: string) {
	return await prisma.group.findMany({ where: { Event: { id: eventId } } });
}

export async function update(data: Partial<Group>) {
	return await prisma.group.update({ where: { id: data.id }, data });
}

export async function remove(id: string) {
	return await prisma.group.delete({ where: { id } });
}
