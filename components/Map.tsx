import type { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { useLevel } from "../context/LevelContext";
import MapPath from "./MapPath";
import MapPoint from "./MapPoint";
import Image from "next/image";
import finishGate from "../assets/imgs/gate.png";

interface HomeMapProps {}

const HomeMap: NextPage<HomeMapProps> = ({}) => {
  const { totalLevel, currentLevel } = useLevel();
  const [paths, setPaths] = useState<ReactNode>();

  useEffect(() => {
    const paths: ReactNode[] = [];

    let level = totalLevel;

    let isRightDirection = false;

    while (level > 1) {
      console.log("mounted");
      const levelsPoint: ReactNode[] = [];
      const isTheLastPath = level == totalLevel; // on the end of the path we change the path type

      // the default level per path is 3
      let levelPerPath = 3;

      // we check if the level to generate is 6 level left
      if (level > totalLevel - 6) {
        /**
         * if the total level not generated yet is even we set the level per path = 2
         * or if the total level not generated yet is 2 we set the level per path = 2
         *
         * example:
         * 6 level not generated yet
         * so we will generate 2 path with 3 level point each
         * -----------------
         * 5 level not generated yet
         * so we will generate 2 path with the first path have 3 level and the second one have 2 level
         * -----------------
         * 4 level not genereated yet
         * so we will generate 2 path with 2 level point each
         */
        levelPerPath = level % 3 == 1 || level == totalLevel - 2 ? 2 : 3;
      }

      // generate level point based on we calculate before
      for (let i = 0; i < levelPerPath; i++) {
        if (level > 0) {
          levelsPoint.push(
            <MapPoint key={`map-point-${level}`} level={level} />
          );
          level--; // we decrement the level that not generated yet
        }
      }

      paths.push(
        <MapPath key={`map-path-${level}`} end={isTheLastPath}>
          {isRightDirection ? levelsPoint : levelsPoint.reverse()}
        </MapPath>
      );

      isRightDirection = !isRightDirection;
    }

    setPaths(paths);
  }, [totalLevel]);

  useEffect(() => {
    // Scroll to available level when the currentLevel updated
    setTimeout(() => {
      document
        .querySelector(".map-point__level-" + (currentLevel + 1)) // +1 on current level so we got the next availble level
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
    }, 500);
  }, [currentLevel]);

  return (
    <>
      <div className={`map ${totalLevel > 7 && "render-bottom-island"}`}>
        <div className="map__finish-gate">
          <img
            src="/assets/imgs/gate.png"
            alt="Finish Gate"
            className="map__finish-gate--image"
          />
        </div>
        {paths}
      </div>
    </>
  );
};

export default HomeMap;
