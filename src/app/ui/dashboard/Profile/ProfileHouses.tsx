import Verify from "@/app/functions/authentication/Verify";
import { getHouseByUser } from "@/app/functions/entities/House";
import { User } from "@prisma/client";
import { cookies } from "next/headers";
import Link from "next/link";
import Avatar from "../../util/Avatar";
import { Suspense } from "react";
import HouseIcon from '../../../../../public/image/house.svg';

export default async function ProfileHouses() {
  const token = cookies().get('token')?.value;

  const profile = Verify(token as string) as User;

  const houses = await getHouseByUser(profile);

  houses.forEach((house) => {
    house.avatar = house.avatar ? house.avatar : HouseIcon;
  });

  return <Suspense fallback={<div/>}>
    {houses.map((house) => 
      <Link href={''} key={house.id}>
        <Avatar image={house.avatar as string} size={'small'} border={'circle'} />
      </Link>
    )}
  </Suspense>
}