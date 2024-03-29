import { User } from "@prisma/client";
import { cookies } from "next/headers";
import Avatar from "../util/Avatar";
import SecondTitle from "../util/Text/SecondTitle";
import Verify from "@/app/functions/authentication/Verify";
export default async function Sidebar() {
  const token = cookies().get("token")?.value as string;

  const { user } = Verify(token);

  return (
    <div className="h-14 w-screen top-0 bg-neutral-900 text-white flex flex-row flex-nowrap justify-center items-center gap-4 shadow-neutral-500 shadow-lg">
      <SecondTitle>{`${user.username}`}</SecondTitle>
      <Avatar profile={user} size={"small"} border={"circle"} />
    </div>
  );
}
