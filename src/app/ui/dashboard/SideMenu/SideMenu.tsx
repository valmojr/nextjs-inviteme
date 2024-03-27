import { cn } from '@/lib/utils';
import SideMenuButton from './SideMenuButton';

export default function SideMenu() {
	return (
		<div
			className={
				cn(
					'fixed flex flex-row flex-nowrap bg-black h-12 w-screen bottom-0 justify-center items-center gap-',
					'lg:relative lg:w-72 lg:h-[600px] lg:bg-stone-300 lg:rounded-md'
				)
			}
		>
			<SideMenuButton label="Create" icon="create" />
			<SideMenuButton label="Home" icon="home" />
			<SideMenuButton label="Search" icon="search" />
			<SideMenuButton label="Profile" icon="profile" />
		</div>
	);
}
