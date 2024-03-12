import FirstTitle from "@/app/ui/util/Text/FirstTitle";
import { Event } from "@prisma/client";

export default function EventResultContainer({ event }: { event: Event }) {
  return <div>
    <FirstTitle>{event.name}</FirstTitle>
  </div>
}