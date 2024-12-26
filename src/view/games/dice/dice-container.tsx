import { useContext, useEffect, useRef, useState } from 'react';
import { Button } from '../../common/Button';
import { Dice } from './dice';
import { DiceContext } from './dice-context-provider';
import { getLimitedNumber } from '../../../utils/getLimitedNumber';
import { GameContext } from '../../../context/game-context-provider';

const DiceContainer = () => {
  const [targetSum, setTargetSum] = useState(6);

  const [isRolling, setIsRolling] = useState(false);

  const dice = useContext(DiceContext);
  const game = useContext(GameContext);

  const diceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const intervalRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);

  const rollDice = () => {
    if (!dice || !game) return;

    game.incrementGold(-1);

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
      }

      dice.setDiceValues([
        parseInt(diceRefs.current[0]!.textContent!),
        parseInt(diceRefs.current[1]!.textContent!),
      ]);

      setIsRolling(false);

      if (
        targetSum ===
        parseInt(diceRefs.current[0]?.textContent!) +
          parseInt(diceRefs.current[1]?.textContent!)
      ) {
        game.incrementGold(10);
      } else {
        console.log(
          parseInt(diceRefs.current[0]?.textContent!) +
            parseInt(diceRefs.current[1]?.textContent!),
        );
      }
    }, timeoutMs);
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
    return <span className="text-center ">Loading...</span>;
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
          className="disabled:cursor-not-allowed disabled:bg-gray-200"
          min={2}
          max={12}
          type="range"
          value={targetSum}
          onChange={(e) => setTargetSum(parseInt(e.target.value))}
          disabled={isRolling}
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
