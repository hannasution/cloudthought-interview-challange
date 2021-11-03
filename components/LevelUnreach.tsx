import type { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "./Button";

interface LevelUnreachProps {}

const LevelUnreach: NextPage<LevelUnreachProps> = ({}) => {
  const router = useRouter();

  const goBack = () => router.replace("/");
  return (
    <>
      <div className="level-unreach">
        <h2 className="levels-level__description">
          You cannot reach this level yet
        </h2>
        <Button onClick={goBack}>Selct another level</Button>
      </div>
    </>
  );
};

export default LevelUnreach;
