type TabProps = {
  text: string;
  clickHandler?: () => void;
};

export default function Tab({ text, clickHandler }: TabProps) {
  return (
    <button
      className="capitalize rounded-md py-2 px-4 text-sm text-slate-300 ease-in duration-300 md:inline-block hover:bg-slate-700"
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
