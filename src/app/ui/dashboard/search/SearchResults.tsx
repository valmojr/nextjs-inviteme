import BackendFetch from '@/app/functions/API/BackendFetch';
import { Event, House, User } from '@prisma/client';
import { randomUUID } from 'crypto';
import { cookies } from 'next/headers'
import { useEffect, useState } from 'react';
import ResultContainer from './ResultContainer';

export default async function SearchResults({
	search,
	type,
}: {
	search: string;
	type: 'event' | 'user' | 'house';
}) {
	const token = cookies().get('token')?.value;
	const response = await fetch(`${process.env.BACKEND_URI}/api/${type}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await response.json() as Array<Event | House | User>;

	let result = data.filter((result: any) => {
		if (result.name) {
			return result.name.toLowerCase().includes(search.toLowerCase());
		} else if (result.username) {
			return result.username.toLowerCase().includes(search.toLowerCase());
		}
	});

	if (Array.isArray(data) && result.length > 0) {
		return (
			<>
				{result.map((result: Event | House | User) => (
					<ResultContainer key={result.id} result={result} />
				))}
			</>
		);
	}

	return <><div>{'No results found'}</div></>
}
