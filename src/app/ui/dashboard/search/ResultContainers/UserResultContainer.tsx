import ColorCheck from "@/app/functions/util/ColorCheck";
import Avatar from "@/app/ui/util/Avatar";
import FirstTitle from "@/app/ui/util/Text/FirstTitle";
import SecondTitle from "@/app/ui/util/Text/SecondTitle";
import { User } from "@prisma/client";
import { twMerge } from "tailwind-merge";

export default function UserResultContainer({
  user,
  className,
}: {
  user: User;
  className?: string;
}) {
  const isLightColor = user.bannerColor ? ColorCheck(user.bannerColor) : false;

  return (
    <div
      className={twMerge(
        "mx-0 w-auto h-24 rounded-md flex flex-row gap-5 flex-nowrap items-center justify-start p-5 shadow-md hover:shadow-lg cursor-pointer select-none",
        `${
          typeof user.bannerColor === "string"
            ? `bg-[${user.bannerColor}]`
            : "bg-stone-600"
        }`,
        `${isLightColor ? "text-black" : "text-white"}`,
        className
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
