"use client";

import { Progress } from "@/components/ui/progress";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GenerateToken from "../../../../ui/authentication/GenerateToken";

export default function RedirectPage() {
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>(
    "Discord OAuth2 Login Provider"
  );
  const [data, setData] = useState<any>();
  const url = useSearchParams();
  const code = new URLSearchParams(url).get("code") || "";

  useEffect(() => {
    async function fetchData() {
      setProgress(40);
      setMessage("Fetching Discord User Info");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/auth/discord/${code}`,
        {
          method: "POST",
        }
      );

      if (response) setProgress(78);

      setMessage("Converting Response Provided");
      const data = await response.json();

      setMessage("extracted info provided => " + JSON.stringify(data));
      if (data?.user) setProgress(100);

      setData(data);
    }

    fetchData();
  }, [code]);

  return (
    <>
      <Progress value={progress} className="w-full mt-5" />
      <h1>
        {"URL => " +
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/auth/discord/${code}`}
      </h1>
      <h1>{message}</h1>
      {data?.token && <GenerateToken token={data?.token} />}
    </>
  );
}
