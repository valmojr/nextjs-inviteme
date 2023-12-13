import GetUser from './GetUser';
import { headers } from 'next/headers';

export default function RedirectPage() {
	const headersList = headers().get('referer') || '';
	const urlObject = new URL(headersList);
	const codeValue = urlObject.searchParams.get('code') || '';

	return (
		<>
			<h1>Redirecting...</h1>
			<GetUser code={codeValue} />
		</>
	);
}
