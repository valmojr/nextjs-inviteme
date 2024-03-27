'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import TypeButton from './TypeItem';

export default function Searcher({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [selectedType, setSelectedType] = useState<
		'user' | 'event' | 'house'
	>('event');
	const [searchTerm, setSearchTerm] = useState<string>('');

	function handleTermSearch(term: string) {
		setSearchTerm(term);
		replace(`${pathname}?query=${term}&type=${selectedType}`);
	}

	function handleTypeChange(type: 'user' | 'event' | 'house') {
		setSelectedType(type);
		replace(`${pathname}?query=${searchTerm}&type=${type}`);
	}

	return (
		<div className="relative flex flex-1 flex-shrink-0">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-stone-100"
				placeholder={placeholder}
				onChange={(e) => handleTermSearch(e.target.value)}
				defaultValue={searchParams.get('query')?.toString()}
			/>
			<div
				className={'lg:h-8 lg:w-16'}
			/>
			<TypeButton
				searchtype="Event"
				position="first"
				onClick={() => handleTypeChange('event')}
				isSelected={selectedType == 'event'}
				key={'event'}
			/>
			<TypeButton
				searchtype="House"
				position="middle"
				onClick={() => handleTypeChange('house')}
				isSelected={selectedType == 'house'}
				key={'house'}
			/>
			<TypeButton
				searchtype="User"
				position="last"
				onClick={() => handleTypeChange('user')}
				isSelected={selectedType == 'user'}
				key={'user'}
			/>
		</div>
	);
}
