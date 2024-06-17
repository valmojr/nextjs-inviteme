import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { EventDTO } from "./CreateEventForm";

function TimeParser(startTime: string) {
  const intTime = parseInt(startTime);

  if (intTime < 10) {
    return `${intTime}0:00`
  } else if (intTime < 100) {
    return `${intTime}:00`
  } else if (intTime < 1000) {
    return `${intTime}0`
  } else {
    return `${intTime}`
  }
}

export default function EventCard({ event }: { event: EventDTO }) {
  return (
    <Card
      className={cn(
        "flex flex-row flex-nowrap gap-10",
        "w-96 min-h-72 h-fit justify-end items-end",
        "p-6"
      )}
    >
      <div className={'max-w-36'}>
        <CardTitle>{event?.name ? event?.name : "Event Title"}</CardTitle>
        <CardDescription>
          {event?.description ? event?.description : null}
        </CardDescription>
      </div>
      {event.startDateDate && (
        <div>
          <h1>{event.startDateDate}</h1>
          <h1>{TimeParser(event.startDateTime)}</h1>
        </div>
      )}
    </Card>
  );
}
