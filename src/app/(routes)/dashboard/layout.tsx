import { loggedUser as mockUser } from '@/app/functions/mock/mock_data';
import Sidebar from '@/app/ui/dashboard/Sidebar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const loggedUser = mockUser;

	return <>{children}</>;
}
