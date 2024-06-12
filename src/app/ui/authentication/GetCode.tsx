'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GetCode() {
	const url = useSearchParams();
	const code = new URLSearchParams(url).get('code') || '';
	const router = useRouter();
	useEffect(() => {
		async function generateToken() {
			router.push('/login/redirect/callback/' + code);
		}
		generateToken();
	}, [code, router]);

	return <></>;
}
