import HttpResponses from "@/app/functions/API/HttpResponses";
import {
  GetToken,
  GetUser,
} from "@/app/functions/authentication/DiscordOAuth2";
import { upsertUser } from "@/app/functions/entities/User";
import DiscordAvatarParser from "@/app/functions/util/DiscordAvatarParser";
import { CookieHandler } from "@/app/ui/authentication/CookieHandler";
import CookieParser from "@/app/ui/authentication/CookieParser";
import Avatar from "@/app/ui/util/Avatar";
import SecondTitle from "@/app/ui/util/Text/SecondTitle";

export default async function Page({ params }: { params: { id: string } }) {
  const access_info = await GetToken(params.id);

  const user = await GetUser(access_info);

  const url = `${process.env.ENVIRONMENT_URI}/api/auth/discord/me`;

  const body = JSON.stringify({user});

  const response = await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  
  if (!response.ok || !data || !data.body?.user) {
    throw new HttpResponses().BadRequest();
  }

  await upsertUser(data.body.user);

  const fetchedCookies = response.headers.get("set-cookie");

  return (
    <>
      <Avatar
        image={DiscordAvatarParser(user.id, user.avatar)}
        size={"large"}
        border={"circle"}
      />
      <SecondTitle
        className={"text-center"}
      >{`Logged in as ${user.global_name}!`}</SecondTitle>
      <CookieHandler>
        <CookieParser cookies={fetchedCookies as string} />
      </CookieHandler>
    </>
  );
}
