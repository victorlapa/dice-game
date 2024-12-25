import { createContext, useState } from 'react';

type GameContextType = {
  gold: number;
  incrementGold: (amount: number) => void;
};

export const GameContext = createContext<GameContextType | null>(null);

interface GameContextProviderProps {
  children: React.ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [gold, setGold] = useState<number>(0);

  const incrementGold = (amount: number) => {
    setGold((prevGold) => prevGold + amount);
  };

  return (
    <GameContext.Provider value={{ gold, incrementGold }}>
      {children}
    </GameContext.Provider>
  );
};
