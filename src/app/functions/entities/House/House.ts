'use server';

import { House, User, Event } from "@prisma/client";
import { randomUUID } from "crypto";
import Connector from "../Connector";

export class HouseDTO extends Connector {
    public async create(data: Partial<House>): Promise<House> {
        if (!data.name || data.name === "") {
            throw new Error("House Name is required");
        }

        return await this.prisma.house.create({
            data: {
                id: randomUUID(),
                createdAt: new Date(),
                updatedAt: new Date(),
                name: data.name,
            }
        });
    }

    public async get(houseOrHouseId: House | string): Promise<House> {
        let house;

        if (typeof houseOrHouseId === 'string') {
            house = await this.prisma.house.findUnique({
                where: {
                    id: houseOrHouseId
                }
            });
        } else {
            house = await this.prisma.house.findUnique({
                where: {
                    id: houseOrHouseId.id
                }
            });
        }

        if (!house) {
            throw new Error("House not found");
        } else {
            return house;
        }
    }

    public async getAll(): Promise<House[]> {
        return await this.prisma.house.findMany();
    }

    public async getUsers(house: House | string): Promise<User[]> {
        let houseId;

        if (typeof house === 'string') {
            houseId = house;
        } else {
            houseId = house.id;
        }

        return await this.prisma.user.findMany({
            where: {
                houses: {
                    some: {
                        id: houseId
                    }
                }
            }
        });
    }

    public async getEvents(house: House | string): Promise<Event[]> {
        let houseId;

        if (typeof house === 'string') {
            houseId = house;
        } else {
            houseId = house.id;
        }

        return await this.prisma.event.findMany({
            where: {
                House: {
                    some: {
                        id: houseId
                    }
                }
            }
        });
    }

    public async update(data: Partial<House>): Promise<House> {
        if (!data.id) {
            throw new Error("House ID is required");
        }

        if (!data.name || data.name === "") {
            throw new Error("House Name is required");
        }

        return await this.prisma.house.update({
            where: {
                id: data.id
            },
            data: {
                updatedAt: new Date(),
                name: data.name,
            }
        });
    }

    public async delete(houseOrHouseId: House | string): Promise<House> {
        if (typeof houseOrHouseId === 'string') {
            return await this.prisma.house.delete({
                where: {
                    id: houseOrHouseId
                }
            });
        } else {
            return await this.prisma.house.delete({
                where: {
                    id: houseOrHouseId.id
                }
            });
        }
    }
}