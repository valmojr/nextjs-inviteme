'use client';
import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import Input from '@/app/ui/util/Forms/Input';
import Label from '@/app/ui/util/Forms/Label';
import Paragrath from '@/app/ui/util/Text/Paragrath';
import ThirdTitle from '@/app/ui/util/Text/ThirdTitle';
import { useState } from 'react';

export default function Page() {
	const [registerUsername, setRegisterUsername] = useState<string>();
	const [registerPassword, setRegisterPassword] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState<string>();

	return (
		<>
			<fieldset>
				<Label>Username</Label>
				<Input></Input>
			</fieldset>
			<fieldset>
				<Label>Password</Label>
				<Input></Input>
			</fieldset>
			<fieldset>
				<Label>Confirm Password</Label>
				<Input></Input>
			</fieldset>
			<SubmitButton color={'primary'}>Register</SubmitButton>
		</>
	);
}
