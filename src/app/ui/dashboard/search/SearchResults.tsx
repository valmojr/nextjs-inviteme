import { Event, House, User } from "@prisma/client";
import { cookies } from "next/headers";
import ResultContainer, { ResultContainerSkeleton } from "./ResultContainer";
import { Suspense } from "react";
import ResultFrame from "./ResultFrame";

export default async function SearchData({
  search,
  type,
}: {
  search: string;
  type: "event" | "user" | "house";
}) {
  const token = cookies().get("token")?.value;
  const response = await fetch(`${process.env.BACKEND_URI}/api/${type}/partial/${search}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
	const data: Event[] | House[] | User[] = [];

	try {
		const results = (await response.json());		
	
		for (const result of results) {
			data.push(result);
		}
	} catch (error) {
		console.log(error);
	}

  if (data.length > 0) {
    return (
      <ResultFrame>
        {data.map((result: Event | House | User) => (
          <>
            <Suspense fallback={<ResultContainerSkeleton />}>
              <ResultContainer key={result.id} result={result} />
            </Suspense>
          </>
        ))}
      </ResultFrame>
    );
  }

	if (search.length == 0) {
		return (
				<h1 className={"mt-8 text-gray-500"}>{"Search for something"}</h1>
		);
	}
  return (
      <h1 className={"mt-8 text-gray-500"}>{`No ${type} results found`}</h1>
  );
}
