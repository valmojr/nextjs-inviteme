import SecondTitle from "../Text/SecondTitle";
import ErrorIcon from "../../../../../public/image/error.svg";
import Image from "next/image";
import Row from "../Divisions/Row";
import { cn } from "@/lib/utils";

export default function ErrorFrame({
  error,
  reset,
}: {
  error: (Error & { digest?: string }) | string;
  reset?: () => void;
}) {
  const errorMessage = typeof error === "string" ? error : error.message;

  return (
    <Row
      className={cn(
        "bg-red-500 p-4 rounded-md text-white cursor-pointer",
        "shadow-lg",
        " duration-200 hover:p-5 hover:shadow-xl"
      )}
      onClick={reset ? () => reset() : () => null}
    >
      <Image src={ErrorIcon} alt={"ERROR"} height={30} />
      <SecondTitle>{errorMessage}</SecondTitle>
    </Row>
  );
}
