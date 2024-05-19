import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function RightMenu() {
  return (
    <div className="h-screen mt-36 p-3 flex flex-col justify-start items-start">
      <Card
        className={cn(
          "h-96 w-[300px]",
          "flex flex-col flex-nowrap justify-center items-center",
          "border bg-zinc-900"
        )}
      >
        <h1>User Notification Timeline</h1>
      </Card>
    </div>
  );
}

export default RightMenu;
