'use client';
import { cookies as CookieHandler } from 'next/headers';
import { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import Paragrath from '../util/Text/Paragrath';
import { redirect } from 'next/navigation';

export default function CookieParser({ cookies }: { cookies: string }) {
	const jwt = cookies.split(';')[0].split('=')[1];
	const [fetchedCookies, setCookie] = useCookies(['token']);

	useEffect(() => {
		setCookie('token', jwt, { path: '/', sameSite: true, secure: true });
	}, [setCookie, jwt]);

	if (fetchedCookies) {
		redirect('/dashboard');
	} else {
		throw new Error('Cookie not found');
	}

	return (
		<>
			<CookiesProvider />
			<Paragrath>
				{fetchedCookies ? 'redirecting...' : 'sem cookie'}
			</Paragrath>
		</>
	);
}
