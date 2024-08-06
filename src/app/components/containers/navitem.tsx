import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface INavItemProps {
  link: string;
  name: string;
  navbg?: boolean;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({
  link,
  name,
  navbg,
}) => {
  return (
    <li>
      <Link
        href={link}
        className={cn([
          "font-medium hover:transition hover:duration-700 hover:text-[#175399] text-[#9C9C9C]",
        ])}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
