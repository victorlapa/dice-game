import { useContext, useEffect, useRef } from 'react';
import { GameContext } from '../../context/game-context-provider';

const ResourceContainer = () => {
  const resources = useContext(GameContext);

  const tempChangeRef = useRef<HTMLSpanElement | null>(null);

  if (resources === null) {
    return <h1>Loading...</h1>;
  }

  useEffect(() => {
    if (tempChangeRef.current) {
      tempChangeRef.current.classList.add('animate-fadeUp');
      setTimeout(() => {
        tempChangeRef.current!.classList.remove('animate-fadeUp');
      }, 1000);
    }
  }, [resources.gold]);

  return (
    <div className="border border-white px-2 py-1 rounded-md  justify-between flex items-center w-40">
      <img src="/assets/images/gold.png" width={28} height={28} />
      <div className="relative">
        <span className="text-white font-bold">{resources.gold}</span>
        <span
          ref={tempChangeRef}
          className={`opacity-0 absolute left-4 ${resources.changedAmount > 0 ? 'text-green-500' : 'text-red-500'}`}
        >
          {resources.changedAmount > 0 ? '+' : ''}
          {resources.changedAmount}
        </span>
      </div>
    </div>
  );
};

export { ResourceContainer };
