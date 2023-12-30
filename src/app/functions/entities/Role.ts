import prisma from '../Database';
import { Role } from '@prisma/client';

export async function create(data: Role) {
	return await prisma.role.create({ data });
}

export async function get() {
	return await prisma.role.findMany();
}

export async function getById(id: string) {
	return await prisma.role.findUnique({ where: { id } });
}

export async function getByGroupId(groupID: string) {
	return await prisma.role.findMany({ where: { groupID } });
}

export async function getByRole(role: Role) {
	return await prisma.role.findUnique({ where: { id: role.id } });
}

export async function update(data: Partial<Role>) {
	return await prisma.role.update({ where: { id: data.id }, data });
}

export async function remove(id: string) {
	return await prisma.role.delete({ where: { id } });
}
