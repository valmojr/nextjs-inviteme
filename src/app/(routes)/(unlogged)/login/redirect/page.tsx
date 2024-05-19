'use client';

import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function GetCode() {
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

export default function RedirectPage() {
	return (
		<>
			<FirstTitle>Redirecting...</FirstTitle>
			<GetCode />
		</>
	);
}
