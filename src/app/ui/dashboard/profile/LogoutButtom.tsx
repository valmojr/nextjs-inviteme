'use client';
import { ExitIcon } from '@radix-ui/react-icons';
import { redirect } from 'next/navigation';

export default function LogoutButtom() {
	const logout = () => {
		localStorage.removeItem('token');
		redirect('/login');
	};

	return <ExitIcon onClick={logout} className={'cursor-pointer'} />;
}
