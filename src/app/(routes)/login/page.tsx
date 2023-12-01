'use client';
import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import Input from '@/app/ui/util/Forms/Input';
import Label from '@/app/ui/util/Forms/Label';
import Paragrath from '@/app/ui/util/Text/Paragrath';
import { useState } from 'react';

export default function Page() {
	const [storedUsername, setStoredUsername] = useState<string>();
	const [storedPassword, setStoredPassword] = useState<string>();

	return (
		<>
			<Paragrath>{'Insert your login info'}</Paragrath>
			<fieldset className="Fieldset">
				<Label htmlFor="name">Username</Label>
				<Input
					id="username"
					placeholder={'username'}
					onChange={(event) => setStoredUsername(event.target.value)}
				/>
			</fieldset>
			<fieldset className="Fieldset">
				<Label htmlFor="username">Password</Label>
				<Input
					id="password"
					placeholder={'********'}
					onChange={(event) => setStoredPassword(event.target.value)}
				/>
			</fieldset>
			<SubmitButton color={'primary'}>Save Changes</SubmitButton>
		</>
	);
}
