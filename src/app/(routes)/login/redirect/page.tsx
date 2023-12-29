import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import GetCode from '../../../ui/authentication/GetCode';
import SecondTitle from '@/app/ui/util/Text/SecondTitle';

export default function RedirectPage({ params }: { params: { code: string } }) {
	return (
		<>
			<FirstTitle>Redirecting...</FirstTitle>
			<GetCode />
		</>
	);
}
