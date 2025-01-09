import { CookieHandler } from "@/app/ui/authentication/CookieHandler";
import CookieParser from "@/app/ui/authentication/CookieParser";

export default function GenerateToken({ token }: { token: string }) {
  return (
    <CookieHandler>
      <CookieParser cookies={token} />
    </CookieHandler>
  );
}
