import { User } from "@prisma/client";
import { sign, verify as verifyJWT } from "jsonwebtoken";
import { redirect } from "next/navigation";

export type UserJWTPayload = {
  user: User;
}

export default function Verify(jsonwebtoken?: string): UserJWTPayload  {
  if (!jsonwebtoken) {
    redirect('/login');
  }
  
  return verifyJWT(jsonwebtoken, process.env.AUTH_SECRET as string) as UserJWTPayload;
}