'use client';

import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import Row from '@/app/ui/util/Divisions/Row';
import Input from '@/app/ui/util/Forms/Input';
import SecondTitle from '@/app/ui/util/Text/SecondTitle';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface EventData {
	title: string;
	house: string;
	startTime: string;
	endTime: string;
	thumbnail?: string;
	description?: string;
}

export default function EventForm() {
	const { register, handleSubmit } = useForm<EventData>();
	const onSubmit: SubmitHandler<EventData> = (data) => {
		console.log(data);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={
				'flex flex-col gap-2 flex-nowrap items-end justify-center'
			}
		>
			<Row>
				<SecondTitle>Title:</SecondTitle>
				<Input
					placeholder="Title"
					{...(register('title'), { required: true })}
				/>
			</Row>

			<Row>
				<SecondTitle>House:</SecondTitle>
				<Input
					placeholder="House"
					{...(register('house'), { required: true })}
				/>
			</Row>
			<Row>
				<SecondTitle>Start Time:</SecondTitle>
				<Input
					placeholder="Start DateTime"
					{...(register('startTime'), { required: true })}
				/>
			</Row>
			<Row>
				<SecondTitle>End Time:</SecondTitle>
				<Input
					placeholder="End DateTime"
					{...(register('endTime'), { required: true })}
				/>
			</Row>
			<Row>
				<SecondTitle>Description:</SecondTitle>
				<Input
					placeholder="Description"
					{...(register('description'), { required: false })}
				/>
			</Row>
			<Row>
				<SecondTitle>Thumbnail:</SecondTitle>
				<Input
					placeholder="Thumbnail"
					{...(register('thumbnail'), { required: false })}
				/>
			</Row>
			<Row className="mx-auto mt-8">
				<SubmitButton>Create</SubmitButton>
			</Row>
		</form>
	);
}
