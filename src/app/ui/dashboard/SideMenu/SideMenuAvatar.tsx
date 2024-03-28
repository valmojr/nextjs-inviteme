import { cookies } from "next/headers";
import Avatar from "../../util/Avatar";
import Verify from "@/app/functions/authentication/Verify";
import { cn } from "@/lib/utils";

export default function SideMenuAvatar() {
  const token = cookies().get("token")?.value;
  const { user } = Verify(token);

  return (
    <>
      <Avatar
        profile={user}
        border={"circle"}
        size={"large"}
      />
    </>
  );
}
