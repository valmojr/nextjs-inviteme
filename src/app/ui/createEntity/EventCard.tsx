import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Event } from "@prisma/client";

export default function EventCard({ event }: { event: Event }) {
  return (
    <Card
      className={cn(
        "flex flex-col flex-nowrap",
        "w-full min-h-72 h-fit justify-end items-end",
        "p-6"
      )}
    >
      <CardTitle>{event?.name ? event?.name : "No Event Title"}</CardTitle>
      <CardDescription>
        {event?.description ? event?.description : null}
      </CardDescription>
    </Card>
  );
}
