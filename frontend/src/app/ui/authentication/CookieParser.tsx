'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useCookies } from 'react-cookie';

export default function CookieParser({ cookies }: { cookies: string }) {
	const jwt = cookies;

	const [fetchedCookies, setCookie] = useCookies(['token']);

	useEffect(() => {
		setCookie('token', jwt, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30,
			sameSite: false,
			expires: new Date(new Date().getTime() + 60 * 60 * 24 * 7),
		});
		if (fetchedCookies) {
			redirect('/dashboard');
		} else {
			throw new Error('Cookie not found');
		}
	}, [setCookie, fetchedCookies, jwt]);

	return <></>;
}
