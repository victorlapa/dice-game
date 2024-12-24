interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ children, disabled, onClick }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="font-space text-2xl font-bold border border-black shadow-md px-4 text-black text-center w-[200px] transition-all disabled:bg-black disabled:text-white"
    >
      {children}
    </button>
  );
};

export { Button };