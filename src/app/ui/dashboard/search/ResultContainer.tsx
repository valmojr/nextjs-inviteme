import { Event as EventType, House, User } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import Avatar from "../../util/Avatar";
import FirstTitle from "../../util/Text/FirstTitle";
import SecondTitle from "../../util/Text/SecondTitle";
import Link from "next/link";
import ColorCheck from "@/app/functions/util/ColorCheck";
import Col from "../../util/Divisions/Col";

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

  let isLightColor = false; 
  if (result.bannerColor) {
    isLightColor = ColorCheck(result.bannerColor);
  }

  return (
    <Link href={`/dashboard/${type}/${result.id}`}>
      {
        // User
        result.avatar && result.username && (
          <div
            className={twMerge(
              "mx-0 w-auto h-24 rounded-md flex flex-row gap-5 flex-nowrap items-center justify-start p-5 shadow-md hover:shadow-lg cursor-pointer select-none",
              result.bannerColor
                ? `bg-[${result.bannerColor}]`
                : `bg-stone-200`,
              isLightColor ? "text-black" : "text-white",
              className
            )}
          >
            <Avatar profile={result} size={"medium"} border={"rounded"} />
            <div className={"flex flex-col flex-nowrap"}>
              <FirstTitle>{result.displayName}</FirstTitle>
              <SecondTitle>{result.username}</SecondTitle>
            </div>
          </div>
        )
      }
      {result.name && result.ownerID && (
        <div
          className={twMerge(
            "mx-0 w-auto h-24 rounded-md flex flex-row gap-5 flex-nowrap items-center justify-start p-5 shadow-md hover:shadow-lg cursor-pointer select-none",
            result.bannerColor ? `bg-[${result.bannerColor}]` : `bg-stone-200`,
            isLightColor ? "text-black" : "text-white",
            className
          )}
        >
          
        </div>
      )}
      {result.name && (
        <div
          className={twMerge(
            "mx-0 w-auto h-24 rounded-md flex flex-row gap-5 flex-nowrap items-center justify-start p-5 shadow-md hover:shadow-lg cursor-pointer select-none bg-gray-300",
            className
          )}
        >
          <Avatar image={'https://proxy.olhardigital.com.br/wp-content/uploads/2024/01/avatar-netlfix.jpg'} size={"medium"} border={"rounded"} />
          <Col>
            <FirstTitle>{result.name}</FirstTitle>
          </Col>
        </div>
      )}
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
