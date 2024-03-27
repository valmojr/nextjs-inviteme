import FirstTitle from "@/app/ui/util/Text/FirstTitle";
import SecondTitle from "@/app/ui/util/Text/SecondTitle";
import { House } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import HouseIcon from "../../../../../../public/image/house.svg";
import Avatar from "@/app/ui/util/Avatar";
import { cookies } from "next/headers";

export default async function HouseResultContainer({
  house,
  className,
}: {
  house: House;
  className?: string;
}) {
  const avatarImage = house.avatar ? house.avatar : HouseIcon;

  const token = cookies().get("token")?.value;

  const response = await fetch(
    `${process.env.BACKEND_URI}/api/house/users/${house.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { users } = await response.json();

  return (
    <div
      className={twMerge(
        "mx-0 w-auto h-24 rounded-md flex flex-row gap-5 flex-nowrap items-center justify-start p-5 shadow-md hover:shadow-lg cursor-pointer select-none",
        "bg-blue-300",
        "hover:bg-blue-500 hover:my-3 hover:text-white",
        className
      )}
    >
      <Avatar image={avatarImage} size={"medium"} border={"rounded"} />
      <div className={"flex flex-col flex-nowrap"}>
        <FirstTitle>{house.name}</FirstTitle>
        <SecondTitle>
          {users.length > 1 ? `${users.length} users` : `${users.length} user`}
        </SecondTitle>
      </div>
    </div>
  );
}
