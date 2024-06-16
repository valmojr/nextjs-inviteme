import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function RightMenu() {
  return (
    <div className="h-full w-[450px] pr-6">
      <Card
        className={cn(
          "h-96 w-full p-4",
          "flex flex-col flex-nowrap justify-center items-center",
          "border dark:bg-zinc-900 bg-zinc-100"
        )}
      >
        <div
          className={cn(
            "w-full h-full",
            "border border-dashed rounded-md border-zinc-300 dark:border-zinc-700",
            "flex flex-col flex-nowrap justify-center items-center"
          )}
        >
          <h1 className="text-lg text-center font-semibold italic dark:text-zinc-700 text-zinc-300">
            No notifications here!
            {/* TODO - Notifications (how the fuck i am going to do it?) */}
          </h1>
        </div>
      </Card>
    </div>
  );
}

export default RightMenu;
