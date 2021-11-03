import type { NextPage } from "next";
import Path from "../assets/svgs/path-segment.svg";
import EndPath from "../assets/svgs/end-path-segment.svg";
import FeetIcon from "../assets/svgs/feet.svg";

interface HomeMapPathProps {
  end: boolean;
}

const HomeMapPath: NextPage<HomeMapPathProps> = ({ end, children }) => {
  // set the max to 5 because we have 4 random number, the count it's start at 0
  const randomNumber = Math.floor(Math.random() * 5);

  let path;
  if (end) {
    path = <EndPath className="map-path__path-end" viewBox="0 0 1010 570" />;
  } else {
    path = <Path className="map-path__path" viewBox="0 0 1040 660" />;
  }

  return (
    <>
      <div className="map-path">
        {path}
        <div className="map-path__levels">{children}</div>
        <FeetIcon className="map-path__feet" />
        {!end && randomNumber > 0 && (
          <div className="random-image">
            <img src={`/assets/imgs/random_${randomNumber}.png`} />
          </div>
        )}
      </div>
    </>
  );
};

export default HomeMapPath;
