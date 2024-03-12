import { ReactElement, Suspense } from "react";
import { ResultContainerSkeleton } from "./ResultContainer";

export default function ResultFrame({children}: {children: ReactElement[]}) {
  return <div className={'w-full py-1'}>
    <Suspense fallback={<>
      <ResultContainerSkeleton key={1} />
      <ResultContainerSkeleton key={2} />
      <ResultContainerSkeleton key={3} />
    </>}>
      {children}
    </Suspense>
  </div>
}