import { Event as EventType, House, User } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import UserResultContainer from "./ResultContainers/UserResultContainer";
import HouseResultContainer from "./ResultContainers/HouseResultContainer";
import EventResultContainer from "./ResultContainers/EventResultContainer";

export default function ResultContainer({
  result,
  className,
}: {
  result: any;
  className?: string;
}) {
  let type: "event" | "house" | "user";
  if (result?.username) {
    type = "user";
    result = result as User;
  } else if (result?.startDate) {
    type = "event";
    result = result as EventType;
  } else {
    type = "house";
    result = result as House;
  }

  return (
    <Link href={`/dashboard/${type}/${result.id}`}>
      {
        // User
        type === 'user' && (
         <UserResultContainer user={result} />
        )
      }
      {
        // House
        type === `house` && (
          <HouseResultContainer house={result}/>
        )
      }
      {
        // Event
        type === `event` && (
          <EventResultContainer event={result}/>
        )
      }
    </Link>
  );
}

export function ResultContainerSkeleton() {
  const skeletonStyles = `
    bg-gray-200
    animate-pulse 2s infinite
    rounded-md
    flex flex-row
    gap-3
    flex-nowrap
    items-center
    justify-start
    p-5
    shadow-md
  `;

  return (
    <div className={twMerge(skeletonStyles, "h-24")}>
      <div className={"w-[70px] h-[60px] rounded-xl border-r-8 bg-slate-300"} />
      <div className={"flex flex-col flex-nowrap"}>
        <div className={"w-40 h-6 mb-1 bg-slate-300"} />
        <div className={"w-24 h-6 mb-1 bg-slate-300"} />
      </div>
    </div>
  );
}
