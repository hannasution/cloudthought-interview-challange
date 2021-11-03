import type { NextPage } from "next";
import { useRouter } from "next/router";
import AppWrapper from "../../components/AppWrapper";
import Button from "../../components/Button";
import LevelNotFound from "../../components/LevelNotFound";
import LevelUnreach from "../../components/LevelUnreach";
import Navbar from "../../components/Navbar";
import { useLevel } from "../../context/LevelContext";

interface LevelProps {}

const Level: NextPage<LevelProps> = ({}) => {
  const { currentLevel, setLevelToComplete } = useLevel();

  const router = useRouter();
  const { level } = router.query;
  const parsedLevel = (): number => {
    if (level) {
      const _level = typeof level === "string" ? level : level[0];
      return parseInt(_level);
    }
    return NaN;
  };

  const goBack = () => router.back();

  const handleWin = () => {
    setLevelToComplete(parsedLevel());
    goBack();
  };

  let page;
  if (isNaN(parsedLevel())) {
    page = <LevelNotFound />;
  } else if (currentLevel < parsedLevel() - 1) {
    page = <LevelUnreach />;
  } else {
    page = (
      <div className="levels-level__action">
        <h2 className="levels-level__description">
          Update your <br />
          current level progress
        </h2>
        <Button onClick={handleWin}>Press me to win</Button>
        <Button onClick={goBack} type="dead">
          Press me to loose
        </Button>
      </div>
    );
  }

  return (
    <>
      <AppWrapper>
        <Navbar title={`Level ${level ? level : ""}`} />
        <div className="levels-level">{page}</div>
      </AppWrapper>
    </>
  );
};

export default Level;
