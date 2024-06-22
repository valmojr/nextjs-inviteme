import { UserJWTPayload } from "@/app/functions/authentication/Verify";
import { CookieHandler } from "@/app/ui/authentication/CookieHandler";
import CookieParser from "@/app/ui/authentication/CookieParser";
import Avatar from "@/app/ui/util/Avatar";
import SecondTitle from "@/app/ui/util/Text/SecondTitle";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `${process.env.BACKEND_URI}/api/auth/discord/${params.id}`,
    {
      method: "POST",
    }
  );

  console.log('User fetching response status ', response.status);

  const data = await response.json();

  console.log('data ', data);

  if (!data?.user) {
    throw new Error("No user provided");
  }

  const { user } = data as UserJWTPayload;

  const token = response?.headers?.get("set-cookie");

  if (!token || token === "") {
    throw new Error("No token provided");
  }

  return (
    <>
      <Avatar profile={user} />
      <SecondTitle
        className={"text-center"}
      >{`logged in as ${user.displayName}`}</SecondTitle>
      <div className={"h-8"}>
        <p className={"text-center"}>{`token is ${token.toString()}`}</p>
      </div>
      <CookieHandler>
        <CookieParser cookies={token} />
      </CookieHandler>
    </>
  );
}
