import Verify from '@/app/functions/authentication/Verify';
import ProfileHouses from '@/app/ui/dashboard/Profile/ProfileHouses';
import Avatar from '@/app/ui/util/Avatar';
import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import { cookies } from 'next/headers';

export default async function Page() {
	const token = cookies().get('token')?.value as string;
	const { user } = Verify(token);

	return (
		<>
			<Avatar profile={user} size={'extralarge'} border={'circle'} />
			<FirstTitle>{user.displayName}</FirstTitle>
			<ProfileHouses/>
		</>
	);
}
