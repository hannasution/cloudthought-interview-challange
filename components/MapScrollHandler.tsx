import type { NextPage } from "next";

interface MapScrollHandlerProps {}

const MapScrollHandler: NextPage<MapScrollHandlerProps> = ({ children }) => {
  return (
    <>
      <div className="map-scroll-handler">{children}</div>
    </>
  );
};

export default MapScrollHandler;
