import { Event, Group } from "@prisma/client";
import { cookies } from "next/headers";
import Image from "next/image";

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

  return (
    <>
      <Image alt={""} src={""} />
      <h1 className="text-2xl">{event.name}</h1>
      <h2 className="text-lg">{event.description}</h2>
    </>
  );
}

export default EventPage;
