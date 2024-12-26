import { useState } from 'react';

const Card = () => {
  const [cardNumber, setCardNumber] = useState<number>();

  return (
    <div className="w-24 h-40 px-3 py-5 bg-slate-800 flex flex-col items-center justify-center rounded-md shadow-md hover:animate-tilt">
      <div className="bg-yellow-700 w-fit rounded-full py-2 px-4 flex items-center justify-center">
        <span className="m-auto text-3xl">{cardNumber ?? <span>?</span>}</span>
      </div>
    </div>
  );
};

export default Card;
