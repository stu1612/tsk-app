// files
import { useAuthContext } from "../hooks/useAuthContext";
import useCollection from "../hooks/useCollection";
import MainNavbar from "../features/UI/MainNavbar";

export default function Collections() {
  const { user } = useAuthContext();
  const { docs } = useCollection(`users/${user.uid}/categories`);

  return (
    <main className="relative">
      <MainNavbar burger={false} />

      <div className=" md:flex items-center justify-center">
        <section className="absolute top-24 h-fit w-full pb-24 px-2 overflow-scroll md:w-[500px] md:px-0">
          <div className="hidden w-8/12 pb-8 pt-8 md:block">
            <h2 className="text-slate-200 text-2xl font-lg">Collections</h2>
          </div>
        </section>
      </div>
    </main>
  );
}