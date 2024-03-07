'use server';

import prisma from '../Database';
import { Event, Group, Role } from '@prisma/client';

export async function createGroup(data: Group) {
	return await prisma.group.create({ data });
}

export async function getAllGroups() {
	return await prisma.group.findMany();
}

export async function getGroupById(id: string) {
	return await prisma.group.findUnique({ where: { id } });
}

export async function getGroupByName(name: string) {
	return await prisma.group.findMany({ where: { name } });
}

export async function getGroupByGroup(group: Group) {
	return await prisma.group.findUnique({ where: { id: group.id } });
}

export async function getGroupByRole(role: Role) {
	return await prisma.group.findUnique({ where: { id: role.groupID as string } });
}

export async function getGroupByRoleId(roleId: string) {
	return await prisma.group.findUnique({ where: { id: roleId } });
}

export async function getGroupByFatherGroupId(fatherGroupID: string) {
	return await prisma.group.findMany({ where: { fatherGroupID } });
}

export async function getGroupChildGroups(group: Group) {
	return await prisma.group.findMany({ where: { fatherGroupID: group.id } });
}

export async function getGroupFatherGroup(group: Group) {
	return await prisma.group.findUnique({
		where: { id: group.fatherGroupID as string },
	});
}

export async function getGroupByEvent(event: Event) {
	return await prisma.group.findMany({ where: { event: { id: event.id } } });
}

export async function getGroupByEventId(eventId: string) {
	return await prisma.group.findMany({ where: { event: { id: eventId } } });
}

export async function updateGroup(data: Partial<Group>) {
	return await prisma.group.update({ where: { id: data.id }, data });
}

export async function removeGroup(id: string) {
	return await prisma.group.delete({ where: { id } });
}
