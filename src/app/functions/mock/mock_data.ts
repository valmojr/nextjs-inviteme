import { User, Event, Group, Role } from '@prisma/client';

export const loggedUser: User = {
    id: '72e8b3a1-9f6c-4d14-b472-8e1c5638a92c',
    name: 'Valmo',
    createdAt: new Date(),
    updatedAt: new Date(),
    avatar: 'https://avatars.githubusercontent.com/u/70849974?v=4',
    email: 'john@doe.com',
    password: null,
};

export const randomUsers: User[] = [
    {
        id: 'd7f98c52-6d0b-491e-bc87-9d2a5e8b0d5d',
        name: 'Abner',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: 'a4b7e3f9-8d6a-40a2-9e87-cb9cfeef3171',
        name: 'Roberto',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/7755073?v=4',
        email: '',
        password: null,
    },
    {
        id: '1f3c5d8e-7b2a-42bf-9f2c-6ec3a897d90a',
        name: 'Jill',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: 'c9a2f6b4-8e7d-4c66-9321-5d5f3a2bf81f',
        name: 'Luiz',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/37157516?v=4',
        email: '',
        password: null,
    },
    {
        id: '5e3b1a8d-614c-4e26-bf22-90c8fa24d51a',
        name: 'Vini',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/20646897?v=4',
        email: '',
        password: null,
    },
    {
        id: '8d6c7a5e-3f1b-48a7-aae1-2e0d9c4d81c2',
        name: 'Rodrigo',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/49030804?v=4',
        email: '',
        password: null,
    }
];

export const roles: Role[] = [
    {
        id: 'f4b0e9c2-3d7a-4936-aa81-1e6c9b5f8d2e',
        name: 'Jogador',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: randomUsers[0].id,
        groupID: 'e1b4c9a7-8f2d-4e3c-9b5a-0d6c7a1f8e9',
    },
    {
        id: '7c8e5d2b-9a0f-43cd-8e6b-1d5f8a0c9b7d',
        name: 'Jogador',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: randomUsers[0].id,
        groupID: 'e1b4c9a7-8f2d-4e3c-9b5a-0d6c7a1f8e9',
    },
    {
        id: '2f9c8e1b-6a4d-4b9f-a0c8-5e3d7a8f1c9e',
        name: 'Jogador',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: randomUsers[0].id,
        groupID: '9d0c7b2e-6a1f-4f8e-8c3d-5b9a0e2f1c7',
    },
    {
        id: 'b2e0d9c8-1f5d-4a8e-9c7b-3a6f2d4c5e8a',
        name: 'Jogador',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: randomUsers[0].id,
        groupID: '9d0c7b2e-6a1f-4f8e-8c3d-5b9a0e2f1c7',
    },
    {
        id: 'gewji3f9-8d6a-40a2-9e87-cb9cfeef3171',
        name: 'Árbitro',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: randomUsers[0].id,
        groupID: 'jrfw8e2d-5a7b-493c-6e0d-8c9a1f3b2e7',
    },
];

export const groups: Group[] = [
    {
        id: '4f8e2d1c-5a7b-493c-6e0d-8c9a1f3b2e7',
        name: 'Beach Tennis',
        createdAt: new Date(),
        updatedAt: new Date(),
        fatherGroupID: null,
        roleIDs: [],
    },
    {
        id: 'e1b4c9a7-8f2d-4e3c-9b5a-0d6c7a1f8e9',
        name: 'Time Azul',
        createdAt: new Date(),
        updatedAt: new Date(),
        fatherGroupID: '4f8e2d1c-5a7b-493c-6e0d-8c9a1f3b2e7',
        roleIDs: ['f4b0e9c2-3d7a-4936-aa81-1e6c9b5f8d2e', '7c8e5d2b-9a0f-43cd-8e6b-1d5f8a0c9b7d']
    },
    {
        id: '9d0c7b2e-6a1f-4f8e-8c3d-5b9a0e2f1c7',
        name: 'Time Vermelho',
        createdAt: new Date(),
        updatedAt: new Date(),
        fatherGroupID: '4f8e2d1c-5a7b-493c-6e0d-8c9a1f3b2e7',
        roleIDs: ['2f9c8e1b-6a4d-4b9f-a0c8-5e3d7a8f1c9e', 'b2e0d9c8-1f5d-4a8e-9c7b-3a6f2d4c5e8a'],
    },
    {
        id: 'jrfw8e2d-5a7b-493c-6e0d-8c9a1f3b2e7',
        name: 'Arbitragem',
        createdAt: new Date(),
        updatedAt: new Date(),
        fatherGroupID: null,
        roleIDs: [],
    }
];

export const assignedEvents: Event[] = [
    {
        id: '3a1e6f9c-8b5d-4c7a-9e2d-1f0c2e5b8d4',
        name: 'Evento Um',
        createdAt: new Date(),
        updatedAt: new Date(),
        // set start date to 5 day from now
        startDate: new Date(new Date().setDate(new Date().getDate() + 5)),
        endDate: new Date(new Date().setDate(new Date().getDate() + 6)),
        description: 'Uma breve descrição do Evento 1',
        thumbnail: 'https://sportlife.com.br/wp-content/uploads/2023/05/Beach-Tennis.jpg',
        location: 'Praia do Forte',
        ownerID: '72e8b3a1-9f6c-4d14-b472-8e1c5638a92c',
        mainGroupID: '4f8e2d1c-5a7b-493c-6e0d-8c9a1f3b2e7',
    },
    {
        id: '1f0c2e5b-8b5d-4c7a-9e2d-3a1e6f9c8d4',
        name: 'Evento Dois',
        createdAt: new Date(),
        updatedAt: new Date(),
        startDate: new Date(new Date().setDate(new Date().getDate() + 5)),
        endDate: new Date(new Date().setDate(new Date().getDate() + 6)),
        description: 'Uma breve descrição do Evento 2',
        thumbnail: 'https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg',
        location: 'Praia do Forte',
        ownerID: '72e8b3a1-9f6c-4d14-b472-8e1c5638a92c',
        mainGroupID: 'jrfw8e2d-5a7b-493c-6e0d-8c9a1f3b2e7',
    },
    {
        id: '8b5d4c7a-9e2d-1f0c-2e5b-3a1e6f9c8d4',
        name: 'Evento Três',
        createdAt: new Date(),
        updatedAt: new Date(),
        startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        endDate: new Date(new Date().setDate(new Date().getDate() + 2)),
        description: 'Uma breve descrição do Evento 3',
        thumbnail: 'https://kayevent.vn/wp-content/uploads/2020/03/mall-img.png',
        location: 'Sala de Eventos',
        ownerID: '72e8b3a1-9f6c-4d14-b472-8e1c5638a92c',
        mainGroupID: 'https://venues.be/wp-content/uploads/2021/03/20230311_great_027-856x1024.jpg',
    }
];

export const avaliableEvents: Event[] = [];