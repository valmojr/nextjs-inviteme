import { cn } from "@/lib/utils";
import SideMenuButton from "./SideMenuButton";
import { cookies, headers } from "next/headers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Verify from "@/app/functions/authentication/Verify";

export default function SideMenu() {
  const url = headers().get("next-url");
  const token = cookies().get("token")?.value;

  const { user } = Verify(token);

  return (
    <div
      className={cn(
        "fixed flex flex-row flex-nowrap bg-black h-12 w-screen bottom-0 justify-center items-center gap-",
        "lg:relative lg:flex-col lg:p-2 lg:gap-2 lg:justify-start lg:w-72 lg:h-[400px] lg:shadow-lg lg:bg-stone-200 lg:rounded-lg",
      )}
    >
      <Avatar>
        <AvatarImage src={user.avatar || ''} />
        <AvatarFallback>{user.displayName || 'VT'}</AvatarFallback>
      </Avatar>
      <SideMenuButton label="Create" icon="create" />
      <SideMenuButton label="Home" icon="home" />
      <SideMenuButton label="Search" icon="search" />
      <SideMenuButton label="Profile" icon="profile" />
    </div>
  );
}
