import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function LeftMenu() {
  return (
    <Card
      className={cn(
        "lg:w-[600px] h-screen justify-center items-center",
        "border bg-zinc-900",
        "flex flex-col flex-nowrap"
      )}
    >
      <h1 className='text-center'>Side Menu with User Events in temporal order</h1>
    </Card>
  );
}

export default LeftMenu;
