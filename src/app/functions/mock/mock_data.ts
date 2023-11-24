import { User, Event } from '@prisma/client';
import { randomUUID } from 'crypto';

export const loggedUser: User = {
    id: randomUUID().toString(),
    name: 'John',
    createdAt: new Date(),
    updatedAt: new Date(),
    avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
    email: 'john@doe.com',
    password: null,
};

export const randomUsers: User[] = [
    {
        id: randomUUID().toString(),
        name: 'Jane',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: randomUUID().toString(),
        name: 'Jack',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: randomUUID().toString(),
        name: 'Jill',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: randomUUID().toString(),
        name: 'James',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: randomUUID().toString(),
        name: 'Jenny',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: randomUUID().toString(),
        name: 'Jared',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: randomUUID().toString(),
        name: 'Jasmine',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: randomUUID().toString(),
        name: 'Jesse',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    },
    {
        id: randomUUID().toString(),
        name: 'Jade',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        email: '',
        password: null,
    }
];

export const assignedEvents: Event[] = [];

export const avaliableEvents: Event[] = [];