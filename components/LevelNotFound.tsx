import type { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "./Button";

interface LevelNotFoundProps {}

const LevelNotFound: NextPage<LevelNotFoundProps> = ({}) => {
  const router = useRouter();

  const goBack = () => router.replace("/");

  return (
    <>
      <div className="level-not-found">
        <h2 className="levels-level__description">Level Not Found</h2>
        <Button onClick={goBack}>Selct another level</Button>
      </div>
    </>
  );
};

export default LevelNotFound;
