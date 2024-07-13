import * as React from "react";
import Link from "next/link";

interface INavItemProps {
  link: string;
  name: string;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({ link, name }) => {
  return (
    <li>
      <Link
        href={link}
        className="text-[#BBBDC3] hover:text-white font-semibold hover:underline hover:underline-offset-8 hover:transition hover:duration-700"
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
