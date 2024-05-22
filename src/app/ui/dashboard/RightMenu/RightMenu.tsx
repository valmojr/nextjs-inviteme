import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function RightMenu() {
  return (
    <div className="h-full w-[450px] pt-20 p-3 pl-0">
      <Card
        className={cn(
          "h-96 w-full",
          "flex flex-col flex-nowrap justify-center items-center",
          "border dark:bg-zinc-900 bg-zinc-100"
        )}
      >
        <h1>User Notification Timeline</h1>
      </Card>
    </div>
  );
}

export default RightMenu;
