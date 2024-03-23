import { User } from "@prisma/client";
import { verify as verifyJWT } from "jsonwebtoken";

type JWTPayload = {
  user: User;
  iat: number;
  exp: number;
}

export default function Verify(jsonwebtoken?: string): JWTPayload {
  if (!jsonwebtoken) {
    throw new Error("No token provided");
  }
  return verifyJWT(jsonwebtoken, process.env.AUTH_SECRET as string) as JWTPayload;
}
