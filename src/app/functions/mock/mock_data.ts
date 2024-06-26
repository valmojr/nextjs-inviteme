import { User, Event, Group, Role } from '@prisma/client';

export const loggedUser: User = {
	id: '72e8b3a1-9f6c-4d14-b472-8e1c5638a92c',
	discordId: '12245363456789',
	username: 'Valmo',
	displayName: 'Valmin',
	createdAt: new Date(),
	updatedAt: new Date(),
	avatarId: 'https://avatars.githubusercontent.com/u/70849974?v=4',
	email: 'john@doe.com',
	password: null,
	bannerColor: null,
	banner: null,
};

export const randomUsers: User[] = [
	{
		id: 'd7f98c52-6d0b-491e-bc87-9d2a5e8b0d5d',
		discordId: '12344356756789',
		username: 'Abner',
		displayName: 'Abner',
		createdAt: new Date(),
		updatedAt: new Date(),
		avatarId: 'https://avatars.githubusercontent.com/u/59853942?v=4',
		bannerColor: null,
		email: '',
		password: null,
		banner: null,
	},
	{
		id: 'a4b7e3f9-8d6a-40a2-9e87-cb9cfeef3171',
		discordId: '987654756454321',
		username: 'Roberto',
		displayName: 'Roberto',
		createdAt: new Date(),
		updatedAt: new Date(),
		avatarId: 'https://avatars.githubusercontent.com/u/7755073?v=4',
		bannerColor: null,
		email: '',
		password: null,
		banner: null,
	},
	{
		id: '1f3c5d8e-7b2a-42bf-9f2c-6ec3a897d90a',
		discordId: '123457656436789',
		username: 'Jill',
		displayName: 'Jill',
		createdAt: new Date(),
		updatedAt: new Date(),
		avatarId: 'https://avatars.githubusercontent.com/u/59853942?v=4',
		bannerColor: null,
		email: '',
		password: null,
		banner: null,
	},
	{
		id: 'c9a2f6b4-8e7d-4c66-9321-5d5f3a2bf81f',
		discordId: '123456123456789',
		username: 'Luiz',
		displayName: 'Luiz',
		createdAt: new Date(),
		updatedAt: new Date(),
		avatarId: 'https://avatars.githubusercontent.com/u/37157516?v=4',
		bannerColor: null,
		email: '',
		password: null,
		banner: null,
	},
	{
		id: '5e3b1a8d-614c-4e26-bf22-90c8fa24d51a',
		discordId: '12349876556789',
		username: 'Vini',
		displayName: 'Vini',
		createdAt: new Date(),
		updatedAt: new Date(),
		avatarId: 'https://avatars.githubusercontent.com/u/20646897?v=4',
		bannerColor: null,
		email: '',
		password: null,
		banner: null,
	},
	{
		id: '8d6c7a5e-3f1b-48a7-aae1-2e0d9c4d81c2',
		discordId: '12345676543789',
		username: 'Rodrigo',
		displayName: 'Rodrigo',
		createdAt: new Date(),
		updatedAt: new Date(),
		avatarId: 'https://avatars.githubusercontent.com/u/49030804?v=4',
		bannerColor: null,
		email: '',
		password: null,
		banner: null,
	},
];

export const roles: Role[] = [
	{
		id: 'f4b0e9c2-3d7a-4936-aa81-1e6c9b5f8d2e',
		name: 'Jogador',
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: randomUsers[0].id,
		groupID: 'e1b4c9a7-8f2d-4e3c-9b5a-0d6c7a1f8e9',
		eventID: ''
	},
	{
		id: '7c8e5d2b-9a0f-43cd-8e6b-1d5f8a0c9b7d',
		name: 'Jogador',
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: randomUsers[0].id,
		groupID: 'e1b4c9a7-8f2d-4e3c-9b5a-0d6c7a1f8e9',
		eventID: ''
	},
	{
		id: '2f9c8e1b-6a4d-4b9f-a0c8-5e3d7a8f1c9e',
		name: 'Jogador',
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: randomUsers[0].id,
		groupID: '9d0c7b2e-6a1f-4f8e-8c3d-5b9a0e2f1c7',
		eventID: ''
	},
	{
		id: 'b2e0d9c8-1f5d-4a8e-9c7b-3a6f2d4c5e8a',
		name: 'Jogador',
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: randomUsers[0].id,
		groupID: '9d0c7b2e-6a1f-4f8e-8c3d-5b9a0e2f1c7',
		eventID: ''
	},
	{
		id: 'gewji3f9-8d6a-40a2-9e87-cb9cfeef3171',
		name: 'Árbitro',
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: randomUsers[0].id,
		groupID: 'jrfw8e2d-5a7b-493c-6e0d-8c9a1f3b2e7',
		eventID: ''
	},
	{
		id: 'fjewio3f-8d6a-40a2-9e87-cb9cfeef3171',
		name: 'Presente',
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: null,
		groupID: 'efweoqi3-8d6a-40a2-9e87-cb9cfeef3171',
		eventID: ''
	},
	{
		id: 'frgrt3f9-8d6a-40a2-9e87-cb9cfeef3171',
		name: 'Presente',
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: null,
		groupID: 'efweoqi3-8d6a-40a2-9e87-cb9cfeef3171',
		eventID: ''
	},
];

export const groups: Group[] = [
	{
		id: '4f8e2d1c-5a7b-493c-6e0d-8c9a1f3b2e7',
		name: 'Beach Tennis',
		createdAt: new Date(),
		updatedAt: new Date(),
		fatherGroupID: null,
		thumbnailId: null,
		roleIDs: [],
		eventID: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
	},
	{
		id: 'e1b4c9a7-8f2d-4e3c-9b5a-0d6c7a1f8e9',
		name: 'Time Azul',
		createdAt: new Date(),
		updatedAt: new Date(),
		fatherGroupID: '4f8e2d1c-5a7b-493c-6e0d-8c9a1f3b2e7',
		thumbnailId: null,
		roleIDs: [
			'f4b0e9c2-3d7a-4936-aa81-1e6c9b5f8d2e',
			'7c8e5d2b-9a0f-43cd-8e6b-1d5f8a0c9b7d',
		],
		eventID: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
	},
	{
		id: '9d0c7b2e-6a1f-4f8e-8c3d-5b9a0e2f1c7',
		name: 'Time Vermelho',
		createdAt: new Date(),
		updatedAt: new Date(),
		fatherGroupID: '4f8e2d1c-5a7b-493c-6e0d-8c9a1f3b2e7',
		thumbnailId: null,
		roleIDs: [
			'2f9c8e1b-6a4d-4b9f-a0c8-5e3d7a8f1c9e',
			'b2e0d9c8-1f5d-4a8e-9c7b-3a6f2d4c5e8a',
		],
		eventID: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
	},
	{
		id: 'jrfw8e2d-5a7b-493c-6e0d-8c9a1f3b2e7',
		name: 'Arbitragem',
		createdAt: new Date(),
		updatedAt: new Date(),
		fatherGroupID: null,
		thumbnailId: null,
		roleIDs: ['gewji3f9-8d6a-40a2-9e87-cb9cfeef3171'],
		eventID: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
	},
	{
		id: 'efweoqi3-8d6a-40a2-9e87-cb9cfeef3171',
		name: 'Turma',
		createdAt: new Date(),
		updatedAt: new Date(),
		fatherGroupID: null,
		thumbnailId: null,
		roleIDs: [
			'fjewio3f-8d6a-40a2-9e87-cb9cfeef3171',
			'frgrt3f9-8d6a-40a2-9e87-cb9cfeef3171',
		],
		eventID: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
	},
	{
		id: 'vfgt3f9-8d6a-40a2-9e87-cb9cfeef3171',
		name: 'Disponível',
		createdAt: new Date(),
		updatedAt: new Date(),
		fatherGroupID: null,
		thumbnailId: null,
		roleIDs: [],
		eventID: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
	},
	{
		id: 'geirij3f9-8d6a-40a2-9e87-cb9cfeef3171',
		name: 'Disponível',
		createdAt: new Date(),
		updatedAt: new Date(),
		fatherGroupID: null,
		thumbnailId: null,
		roleIDs: [],
		eventID: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
	},
];

export const assignedEvents: Event[] = [
	{
		id: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
		name: 'Evento Um',
		createdAt: new Date(),
		updatedAt: new Date(),
		startDate: new Date(new Date().setDate(new Date().getDate() + 5)),
		endDate: new Date(new Date().setDate(new Date().getDate() + 6)),
		description: 'Uma breve descrição do Evento 1',
		thumbnailId:
			'https://sportlife.com.br/wp-content/uploads/2023/05/Beach-Tennis.jpg',
		location: 'Praia do Forte',
		ownerID: '72e8b3a1-9f6c-4d14-b472-8e1c5638a92c',
		mainGroupID: '4f8e2d1c-5a7b-493c-6e0d-8c9a1f3b2e7',
		visibility: "PRIVATE",
	},
	{
		id: '1f0c2e5b-8b5d-4c7a-9e2d-3a1e6f9c8d4',
		name: 'Evento Dois',
		createdAt: new Date(),
		updatedAt: new Date(),
		startDate: new Date(new Date().setDate(new Date().getDate() + 5)),
		endDate: new Date(new Date().setDate(new Date().getDate() + 6)),
		description: 'Uma breve descrição do Evento 2',
		thumbnailId:
			'https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg',
		location: 'Praia do Forte',
		ownerID: '72e8b3a1-9f6c-4d14-b472-8e1c5638a92c',
		mainGroupID: 'jrfw8e2d-5a7b-493c-6e0d-8c9a1f3b2e7',
		visibility: "PRIVATE",
	},
	{
		id: '8b5d4c7a-9e2d-1f0c-2e5b-3a1e6f9c8d4',
		name: 'Evento Três',
		createdAt: new Date(),
		updatedAt: new Date(),
		startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
		endDate: new Date(new Date().setDate(new Date().getDate() + 2)),
		description: 'Uma breve descrição do Evento 3',
		thumbnailId:
			'https://kayevent.vn/wp-content/uploads/2020/03/mall-img.png',
		location: 'Sala de Eventos',
		ownerID: '72e8b3a1-9f6c-4d14-b472-8e1c5638a92c',
		mainGroupID: 'efweoqi3-8d6a-40a2-9e87-cb9cfeef3171',
		visibility: "UNLISTED",
	},
];

export const availableEvents: Event[] = [
	{
		id: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
		name: 'Evento Sobrando 1',
		createdAt: new Date(),
		updatedAt: new Date(),
		startDate: new Date(new Date().setDate(new Date().getDate() + 11)),
		endDate: new Date(new Date().setDate(new Date().getDate() + 12)),
		description: 'Uma breve descrição do Evento 1',
		thumbnailId:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjNmrqKMyaV01UV62LKQgwYEnik_w5JsHFh-hbFAWuOPOH0FFwwU4KhsBzZd5ZyFSLP0&usqp=CAU',
		location: 'Rua da Praia',
		ownerID: 'a4b7e3f9-8d6a-40a2-9e87-cb9cfeef3171',
		mainGroupID: 'vfgt3f9-8d6a-40a2-9e87-cb9cfeef3171',
		visibility: "PRIVATE",
	},
	{
		id: 'iefuwio3f-8d6a-40a2-9e87-cb9cfeef3171',
		name: 'Evento Sobrando 2',
		createdAt: new Date(),
		updatedAt: new Date(),
		startDate: new Date(new Date().setDate(new Date().getDate() + 11)),
		endDate: new Date(new Date().setDate(new Date().getDate() + 12)),
		description: 'Uma breve descrição do Evento 2',
		thumbnailId:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lF04zozTsbd9sJGD2NGNuyZWIRdYN1TauUKX9099LD35WidFgATEmTFQJTyW7m7B2eU&usqp=CAU',
		location: 'Rua da Praia',
		ownerID: 'a4b7e3f9-8d6a-40a2-9e87-cb9cfeef3171',
		mainGroupID: 'geirij3f9-8d6a-40a2-9e87-cb9cfeef3171',
		visibility: "UNLISTED",
	},
];
