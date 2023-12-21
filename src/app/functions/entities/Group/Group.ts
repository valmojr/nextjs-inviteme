'use server';

import { Group } from "@prisma/client";
import { randomUUID } from "crypto";
import Connector from "../Connector";

export class GroupDTO extends Connector {
    public async create(data: Partial<Group>): Promise<Group> {
        if (!data.name || data.name === "") {
            throw new Error("Group name is required");
        }

        if (!data.roleIDs) {
            throw new Error("Group requires at least one role");
        }

        return await this.prisma.group.create({
            data: {
                id: randomUUID(),
                createdAt: new Date(),
                updatedAt: new Date(),
                name: data.name,
                roleIDs: data.roleIDs,
                fatherGroupID: data.fatherGroupID,
            }
        });
    }

    public async get(groupOrGroupId: Group | string): Promise<Group> {
        let group;

        if (typeof groupOrGroupId === 'string') {
            group = await this.prisma.group.findUnique({
                where: {
                    id: groupOrGroupId
                }
            });
        } else {
            group = await this.prisma.group.findUnique({
                where: {
                    id: groupOrGroupId.id
                }
            });
        }

        if (!group) {
            throw new Error("Group not found");
        } else {
            return group;
        }
    }

    public async getAll(): Promise<Group[]> {
        return await this.prisma.group.findMany();
    }

    public async getChildGroups(groupOrGroupId: Group | string) {
        if (typeof groupOrGroupId == 'string') {
            return this.prisma.group.findMany({where: {fatherGroupID: groupOrGroupId}})
        } else {
            return this.prisma.group.findMany({where: {fatherGroupID: groupOrGroupId.id}})
        }
    }

    public async update(data: Partial<Group>): Promise<Group> {
        if (!data.id) {
            throw new Error("Group ID is required");
        }

        if (!data.name || data.name === "") {
            throw new Error("Group name is required");
        }

        if (!data.roleIDs) {
            throw new Error("Group requires at least one role");
        }

        return await this.prisma.group.update({
            where: {
                id: data.id
            },
            data: {
                updatedAt: new Date(),
                name: data.name,
                roleIDs: data.roleIDs,
                fatherGroupID: data.fatherGroupID,
            }
        });
    }

    public async delete(groupOrGroupId: Group | string): Promise<Group> {
        if (typeof groupOrGroupId === 'string') {
            return await this.prisma.group.delete({
                where: {
                    id: groupOrGroupId
                }
            });
        } else {
            return await this.prisma.group.delete({
                where: {
                    id: groupOrGroupId.id
                }
            });
        }
    }
}
