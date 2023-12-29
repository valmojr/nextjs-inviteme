'use client';
import { useEffect, useState } from 'react';
import Paragrath from '../util/Text/Paragrath';

export default function CookieParser({ cookies }: { cookies: string }) {
	const [cookied, setCookied] = useState<boolean>(false);
	const jwt = cookies.split(';')[0].split('=')[1];

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('token', jwt);

			localStorage.getItem('token')
				? setCookied(true)
				: setCookied(false);
		}
	}, [cookies, jwt]);

	return (
		<Paragrath className={'text-center'}>
			{(cookied ? 'sem cookie\n' : 'com cookie\n') + jwt}
		</Paragrath>
	);
}
