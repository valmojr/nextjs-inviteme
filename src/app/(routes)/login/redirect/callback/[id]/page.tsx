import { CookieHandler } from "@/app/ui/authentication/CookieHandler";
import CookieParser from "@/app/ui/authentication/CookieParser";
import Avatar from "@/app/ui/util/Avatar";
import { User } from "@prisma/client";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `${process.env.BACKEND_URI}/api/auth/discord/${params.id}`,
    {
      method: "POST",
    }
  );

  const data = await response.json();

  if (!data?.user) {
    throw new Error("No user provided");
  }

  const { user } = data as { user: User };

  const token = response?.headers
    ?.get("set-cookie")
    ?.split(";")[0]
    ?.split("=")[1] as string;

  if (!token) {
    throw new Error("No token provided");
  }

  return (
    <>
      <Avatar profile={user} />
      <h1>{`logged in as ${user.displayName}`}</h1>
      <h1>{`token is ${token}`}</h1>
      <CookieHandler>
        <CookieParser cookies={token} />
      </CookieHandler>
    </>
  );
}
