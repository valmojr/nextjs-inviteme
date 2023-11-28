import { Role } from "@prisma/client";
import Connector from "../Connector";
import { randomUUID } from "crypto";


export class RoleDTO extends Connector {
    public async create(data: Partial<Role>): Promise<Role> {
        if (!data.name || data.name === "") {
            throw new Error("Role name is required");
        }

        if (!data.groupID) {
            throw new Error("Group ID is required");
        }

        return await this.prisma.role.create({
            data: {
                id: randomUUID(),
                createdAt: new Date(),
                updatedAt: new Date(),
                name: data.name,
                userId: data.userId,
                groupID: data.groupID,
            }
        });
    
    }

    public async get(data: Role | string): Promise<Role> {
        let role;

        if (typeof data === 'string') {
            role = await this.prisma.role.findUnique({
                where: {
                    id: data
                }
            });
        } else {
            role = await this.prisma.role.findUnique({
                where: {
                    id: data.id
                }
            });
        }

        if (!role) {
            throw new Error("Role not found");
        } else {
            return role;
        }
    }

    public async getAll(): Promise<Role[]> {
        return await this.prisma.role.findMany();
    }

    public async getByUser(userId: string): Promise<Role[]> {
        return await this.prisma.role.findMany({
            where: {
                userId
            }
        });
    }

    public async update(data: Partial<Role>): Promise<Role> {
        if (!data.id) {
            throw new Error("Role ID is required");
        }

        if (!data.name || data.name === "") {
            throw new Error("Role name is required");
        }

        if (!data.groupID) {
            throw new Error("Group ID is required");
        }

        return await this.prisma.role.update({
            where: {
                id: data.id
            },
            data: {
                updatedAt: new Date(),
                name: data.name,
                userId: data.userId,
                groupID: data.groupID,
            }
        });
    
    }

    public async delete(roleOrRoleId: Role | string): Promise<Role> {
        if (typeof roleOrRoleId === 'string') {
            return await this.prisma.role.delete({
                where: {
                    id: roleOrRoleId
                }
            });
        } else {
            return await this.prisma.role.delete({
                where: {
                    id: roleOrRoleId.id
                }
            });
        }
    }
}
