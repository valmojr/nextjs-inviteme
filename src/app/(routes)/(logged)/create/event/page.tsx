import Verify from "@/app/functions/authentication/Verify";
import CreateEventForm from "@/app/ui/createEntity/CreateEventForm";
import { cookies } from "next/headers";

function CreateEventPage() {
  const token = cookies().get("token")?.value;
  const { user } = Verify(token);

  return (
    <>
      <CreateEventForm user={user} />
    </>
  );
}

export default CreateEventPage;
