interface Props {
  number: number;
  ref: any;
}

const Dice = ({ number, ref }: Props) => {
  return (
    <div className="h-8 w-8 flex items-center justify-center border border-black font-space">
      <div
        className={`w-6 h-6 flex items-center justify-center bg-red-600 rounded-full`}
      >
        <span ref={ref} className="font-bold">
          {number}
        </span>
      </div>
    </div>
  );
};

export { Dice };
