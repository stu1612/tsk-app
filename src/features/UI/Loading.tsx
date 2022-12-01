export default function Loading() {
  return (
    <div className="bg-dark_500 h-screen w-screen z-[900] flex justify-center items-center">
      <span className="flex h-8 w-8">
        <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-primary"></span>
      </span>
    </div>
  );
}
