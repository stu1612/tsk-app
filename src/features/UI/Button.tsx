type ButtonProps = {
  text: string;
  theme: string;
  clickHandler?: () => void;
  disabled?: boolean;
};

export default function Button({
  text,
  theme,
  clickHandler,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`text-md rounded-md py-3 px-5 mb-4  capitalize text-sm hover:animate-pulse pointer-events-auto  ${
        theme === "light"
          ? "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-pink-200"
          : "bg-slate-700"
      }`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
