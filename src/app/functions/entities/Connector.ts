import { PrismaClient } from '@prisma/client';

export default class Connector {
	protected prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}
}
