import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import ThirdTitle from '../../util/Text/ThirdTitle';

export default function TypeButton(
	props: {
		searchType: 'User' | 'House' | 'Event';
		position: 'first' | 'middle' | 'last';
		isSelected?: boolean;
	} & ComponentProps<'button'>
) {
	return (
		<button
			{...props}
			className={twMerge(
				'flex flex-row flex-nowrap items-center justify-center h-12 w-28 duration-100 bg-blue-300 text-white hover:bg-blue-500 cursor-pointer',
				props.position == 'first' ? 'rounded-l-lg' : '',
				props.position == 'last' ? 'rounded-r-lg' : '',
				props.isSelected ? 'bg-blue-500' : '',
				props.className
			)}
		>
			<ThirdTitle className={'text-bold'}>{props.searchType}</ThirdTitle>
		</button>
	);
}
