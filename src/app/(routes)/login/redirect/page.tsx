'use client';
import { useSearchParams } from 'next/navigation';
import GetUser from './GetUser';

export default function RedirectPage() {
	const code = `${useSearchParams().get('code')}`;

	return (
		<>
			<h1>Redirecting...</h1>
			<h3>{code}</h3>
			<GetUser code={code} />
		</>
	);
}
