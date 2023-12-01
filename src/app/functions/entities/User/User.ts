import {User} from "@prisma/client";
import Connector from "../Connector";
import { randomUUID } from "crypto";

export class UserDTO extends Connector {
    public async create(data: Partial<User>): Promise<User> {
        if (data.name == undefined || data.name === "") {
            throw new Error("User name is required");
        }

        return await this.prisma.user.create({
            data: {
                id: randomUUID(),
                createdAt: new Date(),
                updatedAt: new Date(),
                name: data.name,
                avatar: data.avatar,
                email: data.email,
            },
        });
    }

    public async get(userOrUserId: User | string): Promise<User> {
        let user;

        if (typeof userOrUserId === 'string') {
            user = await this.prisma.user.findUnique({
                where: {
                    id: userOrUserId
                }
            });
        } else {
            user = await this.prisma.user.findUnique({
                where: {
                    id: userOrUserId.id
                }
            });
        }

        if (!user) {
            throw new Error("User not found");
        } else {
            return user;
        }
    }

    public async getByName(name: string) {
        return await this.prisma.user.findUnique({
            where: {
                name
            }
        })
    }

    public async getAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    public async update(data: Partial<User>): Promise<User> {
        if (!data.id) {
            throw new Error("User ID is required");
        }

        if (data.name == undefined || data.name === "") {
            throw new Error("User name is required");
        }

        return await this.prisma.user.update({
            where: {
                id: data.id
            },
            data: {
                updatedAt: new Date(),
                name: data.name,
                avatar: data.avatar,
                email: data.email,
            }
        });
    }

    public async delete(userOrUserId: User | string): Promise<User> {
        if (typeof userOrUserId === 'string') {
            return await this.prisma.user.delete({
                where: {
                    id: userOrUserId
                }
            });
        } else {
            return await this.prisma.user.delete({
                where: {
                    id: userOrUserId.id
                }
            });
        }
    }
}
