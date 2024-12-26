import { createContext, useState } from 'react';

type GameContextType = {
  gold: number;
  changedAmount: number;
  incrementGold: (amount: number) => void;
  decreaseGold: (amount: number) => void;
};

export const GameContext = createContext<GameContextType | null>(null);

interface GameContextProviderProps {
  children: React.ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [gold, setGold] = useState<number>(0);
  const [changedAmount, setChangedAmount] = useState<number>(0);

  const incrementGold = (amount: number) => {
    setGold((prevGold) => prevGold + amount);
    setChangedAmount(amount);
  };

  const decreaseGold = (amount: number) => {
    setGold((prevGold) => prevGold - amount);
    setChangedAmount(-amount);
  };

  return (
    <GameContext.Provider
      value={{ gold, changedAmount, incrementGold, decreaseGold }}
    >
      {children}
    </GameContext.Provider>
  );
};
