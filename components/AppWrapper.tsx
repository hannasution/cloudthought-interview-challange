import type { NextPage } from "next";

interface AppWrapperProps {}

const AppWrapper: NextPage<AppWrapperProps> = ({ children }) => {
  return (
    <>
      <div className="app-wrapper">{children}</div>
    </>
  );
};

export default AppWrapper;
