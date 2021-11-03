import type { NextPage } from "next";
import { useLevel } from "../context/LevelContext";
import Button from "./Button";

interface ResetButtonProps {}

const ResetButton: NextPage<ResetButtonProps> = ({}) => {
  const { fetchNewLevel } = useLevel();

  return (
    <>
      <div className="reset-button">
        <Button onClick={fetchNewLevel}>Refresh Data</Button>
      </div>
    </>
  );
};

export default ResetButton;
