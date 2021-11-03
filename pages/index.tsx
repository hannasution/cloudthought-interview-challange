import type { NextPage } from "next";
import AppWrapper from "../components/AppWrapper";
import Map from "../components/Map";
import MapScrollHandler from "../components/MapScrollHandler";
import Navbar from "../components/Navbar";
import ResetButton from "../components/ResetButton";

interface IndexProps {}

const Index: NextPage<IndexProps> = ({}) => {
  return (
    <>
      <AppWrapper>
        <Navbar title="Farhan Game!" />
        <MapScrollHandler>
          <Map />
        </MapScrollHandler>
        <ResetButton />
      </AppWrapper>
    </>
  );
};

export default Index;
