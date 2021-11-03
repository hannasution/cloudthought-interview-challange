import type { NextPage } from "next";

interface NavbarProps {
  title: string;
}

const Navbar: NextPage<NavbarProps> = ({ title }) => {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar__h1">{title}</h1>
      </div>
    </>
  );
};

export default Navbar;
