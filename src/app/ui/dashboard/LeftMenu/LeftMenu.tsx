import Verify from "@/app/functions/authentication/Verify";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Event } from "@prisma/client";
import Link from "next/link";

function Loading() {
  return (
    <>
      <Skeleton className="w-72 h-24 rounded-xl mb-6" />
      <Skeleton className="w-72 h-24 rounded-xl mb-6" />
      <Skeleton className="w-72 h-24 rounded-xl mb-6" />
      <Skeleton className="w-72 h-24 rounded-xl mb-6" />
      <Skeleton className="w-72 h-24 rounded-xl mb-6" />
      <Skeleton className="w-72 h-24 rounded-xl mb-6" />
    </>
  );
}

function EventCard({ event }: { event: Event }) {
  const startTime = new Date(event.startDate);
  const endTime = event.endDate ? new Date(event.endDate) : null;

  return (
    <Link href={`/event/${event.id}`} className="w-full">
      <Card
        className={cn(
          "flex flex-col flex-nowrap",
          "w-full h-24 dark:bg-zinc-800 bg-zinc-300",
          "mb-4 items-end justify-end p-3"
        )}

        style={{backgroundImage: event.thumbnailId || undefined}}
      >
        <h1 className="text-lg">{event.name}</h1>
        <h3 className="text-sm">{`${startTime.getDay()}/${startTime.getMonth()}/${startTime.getFullYear()} - ${startTime.getHours()}:${startTime.getMinutes()}`}</h3>
      </Card>
    </Link>
  );
}

async function LeftMenu() {
  const token = cookies().get("token")?.value;

  const { user } = Verify(token);

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/event`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  const allUserEvents = (await response.json()) as Event[];

  const thereIsNoEvents = allUserEvents.length == 0;

  return (
    <Card
      className={cn(
        "lg:w-[320px] h-screen justify-start items-center",
        "border dark:bg-zinc-900 bg-zinc-100",
        "flex flex-col flex-nowrap pt-20 px-3",
        "rounded-none"
      )}
    >
      <Suspense fallback={<Loading />}>
        {thereIsNoEvents && (
          <div
            className={cn(
              "w-[300px] h-full ml-4 mr-4 mb-4",
              "border border-dashed rounded-lg border-zinc-300 dark:border-zinc-700",
              "flex flex-col flex-nowrap justify-center items-center"
            )}
          >
            <h1 className="text-center font-semibold italic dark:text-zinc-700 text-zinc-300">
              If you join any event, it will be displayed here
            </h1>
          </div>
        )}
        {!thereIsNoEvents &&
          allUserEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
      </Suspense>
    </Card>
  );
}

export default LeftMenu;
