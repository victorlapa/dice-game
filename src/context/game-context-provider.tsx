import { createContext, useState } from 'react';

type GameContextType = {
  gold: number;
  setGold: (amount: number) => void;
};

export const GameContext = createContext<GameContextType | null>(null);

interface GameContextProviderProps {
  children: React.ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [gold, setGold] = useState<number>(0);

  return (
    <GameContext.Provider value={{ gold, setGold }}>
      {children}
    </GameContext.Provider>
  );
};
