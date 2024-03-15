"use client";

import { House } from "@prisma/client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Avatar from "../../util/Avatar";
import Link from "next/link";
import Row from "../../util/Divisions/Row";
import ThirdTitle from "../../util/Text/ThirdTitle";

export default function ProfileHouseContainer({ house }: { house: House }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Link
      href={`/dashboard/house/${house.id}`}
      key={house.id}
    >
      <Row
        className={twMerge('duration-250 h-10 w-10 bg-stone-300 rounded-full cursor-pointer hover:bg-stone-600 hover:w-32 transition-colors')}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Avatar
          image={house.avatar as string}
          size={"small"}
          border={"circle"}
        />
        {isHovered && (
          <ThirdTitle
            className={twMerge("font-bold text-white")}
          >
            {house.name}
          </ThirdTitle>
        )}
      </Row>
    </Link>
  );
}
