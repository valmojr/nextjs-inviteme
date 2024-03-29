import Verify from "@/app/functions/authentication/Verify";
import { getHouseByUser } from "@/app/functions/entities/House";
import { cookies } from "next/headers";
import { Suspense } from "react";
import HouseIcon from "../../../../../public/image/house.svg";
import { twMerge } from "tailwind-merge";
import Row from "../../util/Divisions/Row";
import ProfileHouseContainer from "./ProfileHouseContainer";

export default async function ProfileHouses() {
  const token = cookies().get("token")?.value;

  const payload = Verify(token as string);

  const profile = payload?.user;

  const houses = await getHouseByUser(profile);

  houses.forEach((house) => {
    house.avatar = house.avatar ? house.avatar : HouseIcon;
  });

  return (
    <Suspense
      fallback={
        <>
          <SuspendedAvatar />
          <SuspendedAvatar />
          <SuspendedAvatar />
        </>
      }
    >
      <Row className={'gap-1 flex-wrap'}>
        {houses.map((house) => (
          <ProfileHouseContainer key={house.id} house={house} />
        ))}
      </Row>
    </Suspense>
  );
}

function SuspendedAvatar() {
  return (
    <div
      className={twMerge(
        "h-8 w-8 rounded-full bg-stone-600 animate-pulse 2s infinite"
      )}
    />
  );
}
