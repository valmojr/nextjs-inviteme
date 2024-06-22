import { CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Event } from "@prisma/client";
import { cookies } from "next/headers";

async function EventPage({ params }: { params: { id: string } }) {
  const token = cookies().get("token")?.value;
  const headerParams = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  const eventFetch = await fetch(
    `${process.env.BACKEND_URI}/api/event/${params.id}`,
    headerParams
  );
  const event = (await eventFetch.json()) as Event;
  const groupFetch = await fetch(
    `${process.env.BACKEND_URI}/api/group/${params.id}`,
    headerParams
  );

  const startTime = new Date(Date.parse(event.startDate.toString()));

  return (
    <>
      <CardHeader
        className={cn(
          "flex flex-row flex-nowrap",
          "w-full h-48 mx-0",
          "justify-end items-end gap-4",
          "dark:bg-zinc-800 bg-zinc-50"
        )}

        style={{backgroundImage: event.thumbnailId || undefined}}
      >
        <div className="flex flex-col flex-nowrap w-full">
          <h1 className="text-3xl">{event.name}</h1>
          <h2 className="text-xl line-clamp-2">
            {event.description
              ? event.description?.length < 60
                ? event.description
                : event.description.slice(0, 60)+'...'
              : null}
          </h2>
        </div>
        <div className="flex flex-col flex-nowrap items-end">
          <h1 className="text-2xl">
            {startTime.getDay() > 10
              ? startTime.getDay()
              : "0" + startTime.getDay()}
            /
            {startTime.getMonth() > 10
              ? startTime.getMonth()
              : "0" + startTime.getMonth()}
          </h1>
          <h1 className="text-3xl">
            {startTime.getHours() > 10
              ? startTime.getHours()
              : "0" + startTime.getHours()}
            :
            {startTime.getSeconds() > 10
              ? startTime.getSeconds()
              : "0" + startTime.getSeconds()}
          </h1>
        </div>
      </CardHeader>
      <CardContent>
        <h1>TODO - Groups and Roles</h1>
      </CardContent>
    </>
  );
}

export default EventPage;
