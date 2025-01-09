import Verify from "@/app/functions/authentication/Verify";
import CreateEventForm from "@/app/ui/createEntity/CreateEventForm";
import { cookies } from "next/headers";

function CreateEventPage() {
  const token = cookies().get("token")?.value;
  const { user } = Verify(token);

  return (
    <div className="w-full h-fit flex flex-row flex-nowrap p-8">
      <CreateEventForm user={user} token={token as string} />
    </div>
  );
}

export default CreateEventPage;
