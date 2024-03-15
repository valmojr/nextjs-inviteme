import Avatar from "@/app/ui/util/Avatar";
import Col from "@/app/ui/util/Divisions/Col";
import ContentContainer from "@/app/ui/util/Divisions/ContentContainer";
import FirstTitle from "@/app/ui/util/Text/FirstTitle";
import ThirdTitle from "@/app/ui/util/Text/ThirdTitle";
import { House } from "@prisma/client";
import { cookies } from "next/headers";

export default async function HousePage({
  params,
}: {
  params: { id: string };
}) {
  const token = cookies().get("token")?.value;
  const response = await fetch(
    `${process.env.BACKEND_URI}/api/house/${params.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = (await response.json()) as House;

  return (
    <ContentContainer className={"flex flex-row flex-nowrap"}>
      <Avatar
        image={data.avatar as string}
        alt={data.name}
        size={"large"}
        border={"circle"}
      />
      <Col>
        <FirstTitle>{data.name}</FirstTitle>
        <ThirdTitle>{data.discordId}</ThirdTitle>
      </Col>
    </ContentContainer>
  );
}
