'use client';

import { CookiesProvider } from 'react-cookie';

export function CookieHandler(props: { children: React.ReactNode }) {
	return <CookiesProvider>{props.children}</CookiesProvider>;
}
