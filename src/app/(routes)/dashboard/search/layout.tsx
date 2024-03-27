import Searcher from "@/app/ui/dashboard/search/Searcher";
import MainContainer from "@/app/ui/util/Divisions/MainContainer";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <MainContainer className={'flex-row flex-nowrap h-max bg-stone-200'}>
      <Searcher placeholder="Search" />
    </MainContainer>
    {children}
  </>;
}
