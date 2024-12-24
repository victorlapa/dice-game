import { createContext, useState } from 'react';

type DiceContextType = {
  diceValues: number[];
  setDiceValues: (diceNumbers: number[]) => void;
};

export const DiceContext = createContext<DiceContextType | null>(null);

interface DiceContextProviderProps {
  children: React.ReactNode;
}

export const DiceContextProvider = ({ children }: DiceContextProviderProps) => {
  const [diceValues, setDiceValues] = useState<number[]>([1, 2]);

  return (
    <DiceContext.Provider value={{ diceValues, setDiceValues }}>
      {children}
    </DiceContext.Provider>
  );
};
