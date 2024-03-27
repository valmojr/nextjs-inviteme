import SearchResults from "@/app/ui/dashboard/search/SearchResults";
import MainContainer from "@/app/ui/util/Divisions/MainContainer";
import { cn } from "@/lib/utils";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; type: "event" | "user" | "house" };
}) {
  const query = searchParams?.query || "";
  const type = searchParams?.type || "event";

  return (
    <>
      <MainContainer
        className={cn("w-full justify-start items-center", "h-[635px]")}
      >
        <SearchResults search={query} type={type} />
      </MainContainer>
    </>
  );
}
