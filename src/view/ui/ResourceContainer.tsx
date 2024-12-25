import { useContext } from 'react';
import { GameContext } from '../../context/game-context-provider';

const ResourceContainer = () => {
  const resources = useContext(GameContext);

  if (resources === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="border border-white px-2 py-1 rounded-md  justify-between flex items-center w-40">
      <img src="/assets/images/gold.png" width={28} height={28} />
      <span className="text-white font-bold">{resources.gold}</span>
    </div>
  );
};

export { ResourceContainer };
