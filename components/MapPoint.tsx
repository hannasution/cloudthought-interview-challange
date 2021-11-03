import type { NextPage } from "next";
import { useLevel } from "../context/LevelContext";
import { useRouter } from "next/router";

interface HomeMapPointProps {
  level: number;
}

const HomeMapPoint: NextPage<HomeMapPointProps> = ({ level }) => {
  const { currentLevel } = useLevel();
  const router = useRouter();

  const handleLevelClick = () => {
    router.push("/levels/" + level);
  };

  const isFinish = currentLevel >= level;
  const isUnavailable = currentLevel < level - 1;

  let iconName;
  if (isFinish) {
    iconName = "looted_treasure";
  } else if (isUnavailable) {
    iconName = "closed_treasure";
  } else {
    iconName = "opened_treasure";
  }

  return (
    <>
      <div className="map-point">
        <button
          onClick={handleLevelClick}
          disabled={isFinish || isUnavailable}
          className={`map-point__level map-point__level-${level} ${
            isFinish && "finish"
          }`}
        >
          <img
            src={`/assets/imgs/${iconName}.png`}
            className="map-point__level-icon"
            alt="Level icon"
          />
          <span className="map-point__level-level">{level}</span>
        </button>
      </div>
    </>
  );
};

export default HomeMapPoint;
