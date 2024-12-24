import { useContext, useEffect, useRef, useState } from 'react';
import { Button } from '../../common/Button';
import { Dice } from './dice';
import { DiceContext } from './dice-context-provider';
import { getLimitedNumber } from '../../../utils/getLimitedNumber';

const DiceContainer = () => {
  const [targetSum, setTargetSum] = useState(0);

  const [isRolling, setIsRolling] = useState(false);

  const dice = useContext(DiceContext);
  const diceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const intervalRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);

  const rollDice = () => {
    setIsRolling(true);

    const timeoutMs = getLimitedNumber(1000, 5000);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      diceRefs.current.forEach((diceRef) => {
        if (diceRef) {
          const randomNumber = getLimitedNumber(1, 6);
          diceRef.textContent = randomNumber.toString();
        }
      });
    }, 150);

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        dice?.setDiceValues(
          diceRefs.current.map((ref) => parseInt(ref?.textContent || '0', 10)),
        );
      }

      setIsRolling(false);
    }, timeoutMs);
  };

  const evaluateDice = () => {
    const sum = dice?.diceValues.reduce((acc, value) => acc + value, 0) || 0;
    return sum === targetSum;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!dice?.diceValues) {
    return <span className="text-center font-space">Loading...</span>;
  }

  return (
    <div className="w-full bg-white p-6 flex flex-col gap-5 items-center justify-center">
      <div className="flex items-center gap-2">
        {dice.diceValues.map((diceValues, index) => (
          <Dice
            key={index}
            number={diceValues}
            ref={(el: HTMLSpanElement | null) => (diceRefs.current[index] = el)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <input
          min={0}
          max={12}
          type="range"
          value={targetSum}
          onChange={(e) => setTargetSum(parseInt(e.target.value))}
        />

        <p className="text-black">Target: {targetSum}</p>
      </div>

      <Button onClick={rollDice} disabled={isRolling} className="w-64">
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </Button>
    </div>
  );
};

export { DiceContainer };
