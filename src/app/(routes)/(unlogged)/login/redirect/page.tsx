"use client";

import { Progress } from "@/components/ui/progress";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GenerateToken from "../../../../ui/authentication/GenerateToken";

export default function RedirectPage() {
  const [progress, setProgress] = useState<number>(0);
  const [data, setData] = useState<any>();
  const url = useSearchParams();
  const code = new URLSearchParams(url).get("code") || "";

  useEffect(() => {
    async function fetchData() {
      setProgress(40);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/auth/discord/${code}`,
        {
          method: "POST",
        }
      );

      if (response) setProgress(78);

      const data = await response.json();

      if (data?.user) setProgress(100);

      setData(data);
    }

    fetchData();
  }, [code]);

  return (
    <>
      <Progress value={progress} className="w-full mt-5" />
      {data?.token && <GenerateToken token={data?.token} />}
    </>
  );
}
