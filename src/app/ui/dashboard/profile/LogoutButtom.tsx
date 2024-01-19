'use client';
import { redirect } from 'next/navigation';
import BottomMenuButtom from '../BottomMenu/BottomMenuButtom';

export default function LogoutButtom() {
	const logout = () => {
		localStorage.removeItem('token');
		redirect('/login');
	};

	return (
		<BottomMenuButtom
			onClick={() => console.log('BOOM! not implemented')}
			icon={'logout'}
			label={'Logout'}
		/>
	);
}
