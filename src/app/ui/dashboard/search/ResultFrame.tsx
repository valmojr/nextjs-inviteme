import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export default function ResultFrame({children, className}: {children: ReactElement[] | ReactElement, className?: string}) {
  return <div className={twMerge('flex flex-col flex-nowrap gap-3 w-full py-1', className)}>
      {children}
  </div>
}