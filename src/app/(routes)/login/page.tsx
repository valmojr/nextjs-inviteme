import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import Input from '@/app/ui/util/Forms/Input';
import Label from '@/app/ui/util/Forms/Label';
import Paragrath from '@/app/ui/util/Text/Paragrath';

export default function Page() {
	return (
		<>
			<Paragrath>{'Insert your login info'}</Paragrath>
			<fieldset className="Fieldset">
				<Label htmlFor="name">Username</Label>
				<Input id="name" defaultValue={'Pedro Duarte'} />
			</fieldset>
			<fieldset className="Fieldset">
				<Label htmlFor="username">Password</Label>
				<Input id="username" defaultValue={'@peduarte'} />
			</fieldset>
			<SubmitButton color={'primary'}>Save Changes</SubmitButton>
		</>
	);
}
