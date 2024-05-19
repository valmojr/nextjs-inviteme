import { Card } from "@/components/ui/card";
import Logo from "../../../../public/AppLogo";
import { ModeToggle } from "@/components/ModeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute w-full h-screen top-0 left 0 flex flex-row flex-nowrap items-center justify-center p-0">
      <div className="md:w-full w-0 h-screen flex flex-row flex-nowrap items-center justify-center dark:bg-zinc-900">
        <h1 className="md:text-3xl text-[0px] italic font-bold dark:text-zinc-200">A place to join friends</h1>
      </div>
      <Card className="h-screen right-0 top-0 rounded-none md:w-96 w-full p-4 flex flex-col flex-nowrap items-center justify-center gap-3">
        <div className="absolute top-2 right-2 h-fit w-full flex justify-end">
          <ModeToggle />
        </div>
        <Logo height={"130px"}/>
        {children}
      </Card>
    </div>
  );
}
