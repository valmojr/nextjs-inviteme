import Verify from "@/app/functions/authentication/Verify";
import { getEventByUserId } from "@/app/functions/entities/Event";
import { getHouseByUserId } from "@/app/functions/entities/House";
import { getUserById } from "@/app/functions/entities/User";
import Avatar from "@/app/ui/util/Avatar";
import FirstTitle from "@/app/ui/util/Text/FirstTitle";
import ThirdTitle from "@/app/ui/util/Text/ThirdTitle";
import { User } from "@prisma/client";
import { cookies } from "next/headers";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const user = await getUserById(id);

  if (!user) {
    throw new Error("User not found");
  }

  const requestUser = Verify(cookies().get("token")?.value as string) as User;

  const isUser = user.id === requestUser?.id;

  const houses = await getHouseByUserId(id);
  const assignedEvents = await getEventByUserId(id);

  return (
    <>
      <Avatar profile={user} size={"extralarge"} border={"circle"} />
      <FirstTitle>{user.displayName}</FirstTitle>
      <ThirdTitle>{user.username}</ThirdTitle>
      <ThirdTitle>{'Houses: ' +JSON.stringify(houses)}</ThirdTitle>
      <ThirdTitle>{'Events: ' +JSON.stringify(assignedEvents)}</ThirdTitle>
    </>
  );
}
