import { cn } from "@/lib/utils";
import { cookies, headers } from "next/headers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Verify from "@/app/functions/authentication/Verify";
import { Castle, CirclePlus, CircleUser, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SideMenuButton from "./SideMenuButton";
import { useRouter } from "next/navigation";

export default function SideMenu() {
  const token = cookies().get("token")?.value;

  const { user } = Verify(token);

  const AvatarFallBackName = user.username[0].concat(
    user.username[user.username.length - 1]
  );

  return (
    <Card
      className={cn(
        "fixed flex flex-row flex-nowrap h-12 w-screen bottom-0 justify-center items-center gap-",
        "lg:relative lg:flex-col lg:p-2 lg:gap-2 lg:justify-start lg:w-72 lg:h-fit lg:shadow-lg lg:rounded-lg"
      )}
    >
      <Card className={cn("flex flex-row h-fit gap-0 w-full")}>
        <CardHeader className={""}>
          <Avatar className={"h-14 w-14"}>
            <AvatarImage src={user.avatar || ""} alt={user.username} />
            <AvatarFallback>{AvatarFallBackName}</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardHeader>
          <CardTitle>{user.displayName}</CardTitle>
          <CardDescription>{user.username}</CardDescription>
        </CardHeader>
      </Card>
      <SideMenuButton href={"/dashboard/create"}>
        <CirclePlus strokeWidth={1.1} />
        <h1>Create</h1>
      </SideMenuButton>
      <SideMenuButton href={"/dashboard"}>
        <Castle strokeWidth={1.1} />
        <h1>Home</h1>
      </SideMenuButton>
      <SideMenuButton href={"/dashboard/search"}>
        <Search strokeWidth={1.1} />
        <h1>Search</h1>
      </SideMenuButton>
      <SideMenuButton href={"/dashboard/profile"}>
        <CircleUser strokeWidth={1.1} />
        <h1>Profile</h1>
      </SideMenuButton>
    </Card>
  );
}
