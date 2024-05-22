import LeftMenu from "@/app/ui/dashboard/LeftMenu/LeftMenu";
import RightMenu from "@/app/ui/dashboard/RightMenu/RightMenu";
import TopMenu from "@/app/ui/dashboard/TopMenu/TopMenu";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function LoggedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 w-full h-screen flex lg:flex-row justify-center items-start gap-3">
      <TopMenu />
      <LeftMenu />
      <Card
        className={cn(
          "w-full h-screen",
          "rounded-none border-none",
          "flex flex-col flex-nowrap justify-start items-center p-2 pt-20"
        )}
      >
        {children}
      </Card>
      <RightMenu />
    </div>
  );
}

export default LoggedLayout;
