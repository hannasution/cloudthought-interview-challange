import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type levelContextType = {
  totalLevel: number;
  currentLevel: number;
  setLevelToComplete: (level: number) => void;
  fetchNewLevel: () => void;
};

const levelContextInitialValue: levelContextType = {
  totalLevel: 0,
  currentLevel: 0,
  setLevelToComplete: (level) => {},
  fetchNewLevel: () => {},
};

const LevelContext = createContext<levelContextType>(levelContextInitialValue);

export function useLevel() {
  return useContext(LevelContext);
}

type props = {
  children: ReactNode;
};

export function LevelProvider({ children }: props) {
  const [totalLevel, setTotalLevel] = useState<number>(
    levelContextInitialValue.totalLevel
  );
  const [currentLevel, setCurrentLevel] = useState<number>(
    levelContextInitialValue.currentLevel
  );

  const setLevelToComplete = (level: number) => {
    setCurrentLevel(level);
  };

  const fetchTotalLevel = async (): Promise<number> => {
    const res = await fetch(
      "https://www.random.org/integers/?num=1&min=0&max=50&col=1&base=10&format=plain&rnd=new"
    );
    const number = await res.json();
    setTotalLevel(number);
    return number;
  };

  const fetchCompletedLevel = async (maxLevel: number): Promise<void> => {
    const res = await fetch(
      `https://www.random.org/integers/?num=1&min=0&max=${maxLevel}&col=1&base=10&format=plain&rnd=new`
    );
    const number = await res.json();
    return setCurrentLevel(number);
  };

  const fetchNewLevel = async () => {
    const _totalLevel = await fetchTotalLevel();
    if (_totalLevel > 0) {
      await fetchCompletedLevel(_totalLevel);
    }
  };

  useEffect(() => {
    fetchNewLevel();
  }, []);

  const value = {
    totalLevel,
    currentLevel,
    setLevelToComplete,
    fetchNewLevel,
  };

  return (
    <>
      <LevelContext.Provider value={value}>{children}</LevelContext.Provider>
    </>
  );
}
