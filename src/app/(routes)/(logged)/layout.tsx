import LeftMenu from "@/app/ui/dashboard/LeftMenu/LeftMenu";
import RightMenu from "@/app/ui/dashboard/RightMenu/RightMenu";
import TopMenu from "@/app/ui/dashboard/TopMenu/TopMenu";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function LoggedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "fixed top-0 w-full h-screen flex lg:flex-row justify-center items-start"
      )}
    >
      <TopMenu />
      <LeftMenu />
      <div
        className={cn(
          "flex flex-row flex-nowrap justify-start items-start",
          "w-full h-screen overflow-auto pt-20 pb-4 pl-4 gap-4",
          ""
        )}
      >
        <Card
          className={cn(
            "w-full h-fit min-h-[680px]",
            "flex flex-col flex-nowrap justify-start items-center",
            "p-0",
            "dark:bg-zinc-900 bg-zinc-100",
            "overflow-auto"
          )}
        >
          {children}
        </Card>
        <RightMenu />
      </div>
    </div>
  );
}

export default LoggedLayout;
