import { randomUUID } from "crypto";
import Connector from "../Connector";
import { Event } from "@prisma/client";

export class EventDTO extends Connector {
    public async create(data: Partial<Event>): Promise<Event> {
        if (!data.name || data.name === "") {
            throw new Error("Event Name is required");
        }

        if (!data.startDate) {
            throw new Error("Event Start Date is required");
        }

        if (!data.endDate) {
            throw new Error("Event End Date is required");
        }

        if ((data.startDate < new Date())) {
            throw new Error("Event Start Date cannot be past");
        }

        if (data.endDate < new Date()) {
            throw new Error("Event EndDate cannot be past");
        }

        if (data.endDate < data.startDate) {
            throw new Error("Event EndDate cannot be before StartDate");
        }

        if (!data.mainGroupID) {
            throw new Error("Event Main Group is required");
        }

        if (!data.ownerID) {
            throw new Error("Event Owner is required");
        }

        return await this.prisma.event.create({
            data: {
                id: randomUUID(),
                createdAt: new Date(),
                updatedAt: new Date(),
                name: data.name,
                description: data.description,
                location: data.location,
                startDate: data.startDate,
                endDate: data.endDate,
                thumbnail: data.thumbnail,
                mainGroupID: data.mainGroupID,
                ownerID: data.ownerID,
            }
        });
    }

    public async get(eventOrEventId: Event | string): Promise<Event> {
        let event;
        
        if (typeof eventOrEventId === 'string') {
            event = await this.prisma.event.findUnique({
                where: {
                    id: eventOrEventId
                }
            });
        } else {
            event = await this.prisma.event.findUnique({
                where: {
                    id: eventOrEventId.id
                }
            });
        }

        if (!event) {
            throw new Error("Event not found");
        } else {
            return event;
        }
    }

    public async getAll(): Promise<Event[]> {
        return await this.prisma.event.findMany();
    }

    public async getByOwner(ownerId: string): Promise<Event[]> {
        return await this.prisma.event.findMany({
            where: {
                ownerID: ownerId
            }
        });
    }

    public async getByHouse(houseId: string): Promise<Event[]> {
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

    public async update(data: Partial<Event>): Promise<Event> {
        if (!data.id) {
            throw new Error("Event ID is required");
        }

        if (!data.name || data.name === "") {
            throw new Error("Event Name is required");
        }

        if (!data.startDate) {
            throw new Error("Event Start Date is required");
        }

        if (!data.endDate) {
            throw new Error("Event End Date is required");
        }

        if ((data.startDate < new Date())) {
            throw new Error("Event Start Date cannot be past");
        }

        if (data.endDate < new Date()) {
            throw new Error("Event EndDate cannot be past");
        }

        if (data.endDate < data.startDate) {
            throw new Error("Event EndDate cannot be before StartDate");
        }

        if (!data.mainGroupID) {
            throw new Error("Event Main Group is required");
        }

        if (!data.ownerID) {
            throw new Error("Event Owner is required");
        }

        return await this.prisma.event.update({
            where: {
                id: data.id
            },
            data: {
                updatedAt: new Date(),
                name: data.name,
                description: data.description,
                location: data.location,
                startDate: data.startDate,
                endDate: data.endDate,
                thumbnail: data.thumbnail,
                mainGroupID: data.mainGroupID,
                ownerID: data.ownerID,
            }
        });
    }

    public async delete(eventOrEventId: Event | string): Promise<Event> {
        if (typeof eventOrEventId === 'string') {
            return await this.prisma.event.delete({
                where: {
                    id: eventOrEventId
                }
            });
        } else {
            return await this.prisma.event.delete({
                where: {
                    id: eventOrEventId.id
                }
            });
        }
    }
}
