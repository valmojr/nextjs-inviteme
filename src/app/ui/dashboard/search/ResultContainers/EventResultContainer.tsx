import FirstTitle from "@/app/ui/util/Text/FirstTitle";
import { Event } from "@prisma/client";

export default function EventResultContainer({ event, className }: { event: Event, className?: string }) {
  return <div className={className}>
    <FirstTitle>{event.name}</FirstTitle>
  </div>
}