export default function getPercentage(total: number, current: number) {
  const calc = ((total - current) / total) * 100;
  const percentage = Number(calc.toFixed(1));
  if (isNaN(percentage)) return 0;
  else return percentage;
}
