import SearchResults from '@/app/ui/dashboard/search/SearchResults';
import Searcher from '@/app/ui/dashboard/search/Searcher';
import ContentContainer from '@/app/ui/util/Divisions/ContentContainer';
import ScreenContainer from '@/app/ui/util/Divisions/ScreenContainer';
import { Suspense } from 'react';

export default function Page({
	searchParams,
}: {
	searchParams?: { query?: string, type: | 'event' | 'user' | 'house'};
}) {
	const query = searchParams?.query || '';
	const type = searchParams?.type || 'event';

	return (
		<ScreenContainer className={'justify-start p-4'}>
			<ContentContainer>
				<Searcher placeholder="Search" />
			</ContentContainer>
            
			<Suspense fallback={<div>Loading...</div>}>
				<SearchResults search={query} type={type} />
			</Suspense>
		</ScreenContainer>
	);
}
