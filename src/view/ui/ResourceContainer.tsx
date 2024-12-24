interface Props {
  amount: number;
}

const ResourceContainer = ({ amount }: Props) => {
  return (
    <div className="border border-white px-2 py-1 rounded-md font-space justify-between flex items-center w-40">
      <img src="/assets/images/gold.png" width={28} height={28} />
      <span className="text-white font-bold">{amount}</span>
    </div>
  );
};

export { ResourceContainer };
