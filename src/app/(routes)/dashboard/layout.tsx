import BottomMenu from '@/app/ui/dashboard/BottomMenu/BottomMenu';
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
			<BottomMenu />
			{children}
		</>
	);
}
