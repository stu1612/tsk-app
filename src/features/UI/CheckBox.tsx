type Props = {
  isChecked: boolean;
  handleChange: () => void;
  color?: string;
};

export default function CheckBox({ isChecked, handleChange, color }: Props) {
  return (
    <input
      type="checkbox"
      className="rounded-md border-2 cursor-pointer focus:ring-0 h-5 w-5 mr-2"
      checked={isChecked}
      onChange={handleChange}
      style={
        color
          ? isChecked
            ? {
                borderColor: color,
                backgroundColor: color,
              }
            : {
                borderColor: color,
              }
          : isChecked
          ? {
              borderColor: "#f472b6",
              backgroundColor: "#f472b6",
            }
          : {
              borderColor: "#f472b6",
              backgroundColor: "transparent",
            }
      }
    />
  );
}
