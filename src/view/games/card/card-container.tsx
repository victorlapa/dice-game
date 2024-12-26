import { useState } from 'react';
import Card from './card';

const CardContainer = () => {
  const [] = useState();

  return (
    <div className="w-full bg-white p-6 flex flex-col gap-5 items-center justify-center">
      <Card />
    </div>
  );
};

export { CardContainer };
