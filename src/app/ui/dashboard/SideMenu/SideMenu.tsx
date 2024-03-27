import SideMenuButton from './SideMenuButton';

export default function SideMenu() {
	return (
		<div
			className={
				'fixed flex flex-row flex-nowrap bg-black h-12 w-screen bottom-0 justify-center items-center gap-3'
			}
		>
			<SideMenuButton label="Create" icon="create" />
			<SideMenuButton label="Home" icon="home" />
			<SideMenuButton label="Search" icon="search" />
			<SideMenuButton label="Profile" icon="profile" />
		</div>
	);
}
