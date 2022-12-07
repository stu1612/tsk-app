// files
import { Link } from "react-router-dom";
import BottomNavbar from "../features/UI/BottomNavbar";
import MainNavbar from "../features/UI/MainNavbar";
import { CategoryType } from "../global";
import CollectionItem from "../features/UI/CollectionItem";
import useCollection from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Collections() {
  const { user } = useAuthContext();

  const { docs } = useCollection(`users/${user.uid}/category`);

  console.log(docs);
  const activeItems =
    docs &&
    (docs as unknown as any[]).map((item: CategoryType) => (
      <CollectionItem key={item.id} {...item} />
    ));

  return (
    <main className="relative">
      <MainNavbar burger={false} />
      <div className=" md:flex items-center justify-center">
        <section className="absolute top-0 h-fit w-full pb-24 px-2 overflow-scroll md:w-[500px] md:px-0 md:top-24">
          <div className="w-8/12 pb-8 pt-8 ">
            <h2 className="text-slate-200 text-2xl font-lg">Collections</h2>
          </div>
          <div className="text-md rounded-lg py-2 px-5 mb-6 mr-2 bg-slate-600 inline-grid">
            <small>All collections</small>
          </div>
          <Link
            to="/icons"
            className="text-md rounded-lg py-2 px-5 mb-6 bg-dark_500 border border-gray-700 inline-grid animate-pulse hover:bg-primary "
          >
            <small>Add collection</small>
          </Link>
          <div className="flex flex-wrap">{activeItems}</div>
        </section>
      </div>
      <BottomNavbar />
    </main>
  );
}
