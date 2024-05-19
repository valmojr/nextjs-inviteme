import Verify from "@/app/functions/authentication/Verify";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import Link from "next/link";
import AppLogo from "../../../../../public/AppLogo";
import { Button } from "@/components/ui/button";
import { Bell, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

function TopMenu() {
  const token = cookies().get("token")?.value;

  const { user } = Verify(token);

  const avatarFallback = user.displayName
    ? user.displayName[0].toUpperCase() + user.displayName[1].toUpperCase()
    : "NULL";

  return (
    <Card
      className={cn(
        "absolute top-0 w-full h-16 p-3 gap-3",
        "rounded-none",
        "flex flex-row flex-nowrap items-center justify-between"
      )}
    >
      <div className="flex flex-row justify-center items-center gap-2">
        <Sheet>
          {" "}
          {/* TODO - Arrumar Sidemenu de Funções */}
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                {
                  "Make changes to your profile here. Click save when you're done."
                }
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value="This is my name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  value="This is my username"
                  className="col-span-3"
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <AppLogo height={45} width={45} />
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex flex-row"></div>
      <div className="flex flex-row gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="rounded-full h-10 w-10 p-2" variant={"outline"}>
              <PlusCircle color="#EEE" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Create Event</DropdownMenuItem>{" "}
            {/* TODO - Create Event Dialog */}
            <DropdownMenuItem>Create Organization</DropdownMenuItem>{" "}
            {/* TODO - Create House/Organization Dialog */}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="rounded-full h-10 w-10 p-2" variant={"outline"}>
          <Bell color="#EEE" />
        </Button>
        <Sheet>
          {" "}
          {/* TODO - Arrumar Sidemenu de Profile */}
          <SheetTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={user.avatar || ""} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                {
                  "Make changes to your profile here. Click save when you're done."
                }
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value="This is my name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  value="This is my username"
                  className="col-span-3"
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
}

export default TopMenu;
