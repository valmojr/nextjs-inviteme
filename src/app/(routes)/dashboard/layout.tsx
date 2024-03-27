import SideMenu from '@/app/ui/dashboard/SideMenu/SideMenu';
import Sidebar from '@/app/ui/dashboard/Sidebar';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const jwtUser = cookies().get('token');

	if (!jwtUser) {
		redirect('/login');
	}

	return (
		<>
			<SideMenu />
			{children}
		</>
	);
}
