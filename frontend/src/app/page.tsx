import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
	cookies().get('token') ? redirect('/dashboard') : redirect('/login');

	return <></>;
}
