import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function RightMenu() {
  return (
    <div className="lg:h-full w-[450px] lg:pr-6">
      <Card
        className={cn(
          "lg:h-96 h-0 lg:w-full w-0 lg:p-4 p-0",
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
          <h1 className="lg:text-lg text-[0px] text-center font-semibold italic dark:text-zinc-700 text-zinc-300">
            No notifications here!
            {/* TODO - Notifications (how the fuck i am going to do it?) */}
          </h1>
        </div>
      </Card>
    </div>
  );
}

export default RightMenu;
