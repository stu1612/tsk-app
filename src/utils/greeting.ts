export default function greeting() {
  const time = new Date();
  const hour = time.getHours();

  if (hour < 12) return "Good morning,";
  if (hour >= 12 && hour < 17) return "Good afternoon,";
  if (hour >= 17 && hour <= 24) return "Good evening,";
}
