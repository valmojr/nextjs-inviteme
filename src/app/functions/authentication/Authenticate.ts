"use server";

import Verify from "./Verify";
import { getUserById } from "../entities/User";

export default async function Authenticate(bearerToken: string | null) {
  if (!bearerToken) return false;

  const token = bearerToken.split(" ")[1];

  try {
    const userInfo = Verify(token);

    const user = getUserById(userInfo?.user?.id);

    if (user) {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
