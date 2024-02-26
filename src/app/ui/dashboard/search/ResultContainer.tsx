import { Event as EventType, House, User } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import Avatar from "../../util/Avatar";
import FirstTitle from "../../util/Text/FirstTitle";
import SecondTitle from "../../util/Text/SecondTitle";

export default function ResultContainer({
  result,
  className,
}: {
  result: any;
  className?: string;
}) {
  return (
    <>
      {
        // User
        result.avatar && result.username && (
          <div
            className={twMerge(
              "w-full h-24 rounded-md flex flex-row gap-5 flex-nowrap items-center justify-start p-5 shadow-md hover:shadow-lg cursor-pointer select-none",
              result.bannerColor ? `bg-gray-200` : "bg-gray-100",
              className
            )}
          >
            <Avatar profile={result} size={"medium"} border={"rounded"} />
            <div className={'flex flex-col flex-nowrap'} >
              <FirstTitle>{result.displayName}</FirstTitle>
              <SecondTitle>{result.username}</SecondTitle>
            </div>
          </div>
        )
      }
    </>
  );
}
