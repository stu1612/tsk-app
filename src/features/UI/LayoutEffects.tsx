export default function LayoutEffects() {
  return (
    <div className=" h-screen w-full absolute z-0 ">
      <div className=" absolute top-20 left-40 h-20 w-20 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-pink-200" />
      <div className=" absolute bottom-10 right-20 h-28 w-28 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-pink-200" />
      <div className=" absolute top-10 right-0 h-12 w-12 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-600" />
      <div className=" absolute bottom-20 left-10 h-24 w-24 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-600" />
    </div>
  );
}
