'use client';

import MainContainer from "@/app/ui/util/Divisions/MainContainer";
import ErrorFrame from "@/app/ui/util/Error/ErroFrame";

export default function ErrorOnSearchRoute({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <MainContainer className={'w-full h-[635px] justify-start items-center'}>
    <ErrorFrame error={error} reset={() => reset()}/>
  </MainContainer>
}