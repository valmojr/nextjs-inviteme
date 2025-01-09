'use server';

import prisma from '../Database';
import { Group, Role } from '@prisma/client';

export async function createRole(data: Role) {
	return await prisma.role.create({ data });
}

export async function getAllRoles() {
	return await prisma.role.findMany();
}

export async function getRoleById(id: string) {
	return await prisma.role.findUnique({ where: { id } });
}

export async function getRoleByGroupId(groupID: string) {
	return await prisma.role.findMany({ where: { groupID } });
}

export async function getRoleByGroup(group: Group) {
	return await prisma.role.findMany({ where: { group: { id: group.id } } });
}

export async function getRoleByRole(role: Role) {
	return await prisma.role.findUnique({ where: { id: role.id } });
}

export async function updateRole(data: Partial<Role>) {
	return await prisma.role.update({ where: { id: data.id }, data });
}

export async function removeRole(id: string) {
	return await prisma.role.delete({ where: { id } });
}
