import AvaliableEvents from '@/app/ui/dashboard/AvaliableEvents';
import IncomingEvents from '@/app/ui/dashboard/IncomingEvents';
import Sidebar from '@/app/ui/dashboard/Sidebar';

export default function Page() {
	return (
		<>
			<Sidebar />
			<IncomingEvents />
			<AvaliableEvents />
		</>
	);
}
