export default function OnBoardingLayout({ children }: any) {
  return (
    <main className="relative mx-auto h-screen w-full flex justify-center">
      <LayoutEffects />
      {children}
    </main>
  );
}

function LayoutEffects() {
  return (
    <div className="hidden h-3/5 w-full lg:w-[968px] md:block absolute bottom-0 -z-0">
      <div className=" absolute top-8 left-0 h-20 w-20 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-pink-200" />
      <div className=" absolute bottom-10 right-20 h-28 w-28 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-pink-200" />
      <div className=" absolute top-0 right-0 h-12 w-12 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-600" />
    </div>
  );
}
