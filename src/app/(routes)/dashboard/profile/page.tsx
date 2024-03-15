import Verify from '@/app/functions/authentication/Verify';
import BottomMenuButton from '@/app/ui/dashboard/BottomMenu/BottomMenuButton';
import ProfileHouses from '@/app/ui/dashboard/Profile/ProfileHouses';
import Avatar from '@/app/ui/util/Avatar';
import LogoutButton from '@/app/ui/util/Buttons/LogoutButton';
import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import { User } from '@prisma/client';
import { cookies } from 'next/headers';

export default async function Page() {
	const token = cookies().get('token')?.value as string;
	const profile = Verify(token) as User;

	return (
		<>
			<Avatar profile={profile} size={'extralarge'} border={'circle'} />
			<FirstTitle>{profile.displayName}</FirstTitle>
				<ProfileHouses/>
			<LogoutButton />
		</>
	);
}
