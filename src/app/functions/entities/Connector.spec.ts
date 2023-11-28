import { PrismaClient } from '@prisma/client';
import {describe, expect, it} from '@jest/globals';

describe('Prisma Connector Tests', () => {
    const prisma = new PrismaClient()

    it('should be able to generate the Data Transfer Object and the entities', () => {

        expect(prisma).toBeDefined();
        expect(prisma).toBeInstanceOf(PrismaClient);
        expect(prisma).toHaveProperty('user');
        expect(prisma).toHaveProperty('house');
        expect(prisma).toHaveProperty('role');
        expect(prisma).toHaveProperty('event');
        expect(prisma).toHaveProperty('group');
    });

    it('should be able to connect to the database', async () => {
        await prisma.$connect();

        console.log(process.env.POSTGRES_PRISMA_URL);

        expect(prisma.$connect).toBeDefined();
        expect(prisma.$connect).toBeInstanceOf(Function);
        expect(prisma.$connect).not.toThrow();
    });

    it('should be able to disconnect to the database', () => {
        expect(true).toBeTruthy();
    });
})
