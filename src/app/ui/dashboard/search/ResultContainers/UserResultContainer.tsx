import ColorCheck from "@/app/functions/util/ColorCheck";
import Avatar from "@/app/ui/util/Avatar";
import FirstTitle from "@/app/ui/util/Text/FirstTitle";
import SecondTitle from "@/app/ui/util/Text/SecondTitle";
import { User } from "@prisma/client";
import { twMerge } from "tailwind-merge";

export default function UserResultContainer({ user }: { user: User }) {
  const isLightColor = user.bannerColor ? ColorCheck(user.bannerColor) : false;

  return (
    <div
      className={twMerge(
        "mx-0 w-auto h-24 rounded-md flex flex-row gap-5 flex-nowrap items-center justify-start p-5 shadow-md hover:shadow-lg cursor-pointer select-none",
        user.bannerColor ? `bg-[${user.bannerColor}]` : "bg-slate-800",
        isLightColor ? "text-black" : "text-white"
      )}
    >
      <Avatar profile={user} size={"medium"} border={"rounded"} />
      <div className={"flex flex-col flex-nowrap"}>
        <FirstTitle>{user.displayName}</FirstTitle>
        <SecondTitle>{user.username}</SecondTitle>
      </div>
    </div>
  );
}
