import BottomMenuButton from './BottomMenuButton';

export default function BottomMenu() {
	return (
		<div
			className={
				'fixed flex flex-row flex-nowrap bg-black h-12 w-screen bottom-0 justify-center items-center gap-3'
			}
		>
			<BottomMenuButton label="Create" icon="create" />
			<BottomMenuButton label="Home" icon="home" />
			<BottomMenuButton label="Search" icon="search" />
			<BottomMenuButton label="Profile" icon="profile" />
		</div>
	);
}
