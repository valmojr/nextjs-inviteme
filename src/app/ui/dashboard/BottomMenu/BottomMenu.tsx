import BottomMenuButtom from './BottomMenuButtom';

export default function BottomMenu() {
	return (
		<div
			className={
				'fixed flex flex-row flex-nowrap bg-black h-12 w-screen bottom-0 justify-center items-center gap-3'
			}
		>
			<BottomMenuButtom label="Create" icon="create" />
			<BottomMenuButtom label="Home" icon="home" />
			<BottomMenuButtom label="Search" icon="search" />
			<BottomMenuButtom label="Profile" icon="profile" />
		</div>
	);
}
