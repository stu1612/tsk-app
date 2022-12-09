// npm
import { Link } from "react-router-dom";
import { RiAddFill } from "react-icons/ri";

// files
import { CategoryType } from "../global";
import { useAuthContext } from "../hooks/useAuthContext";
import useCollection from "../hooks/useCollection";

// UI
import BottomNavbar from "../features/UI/BottomNavbar";
import Button from "../features/UI/Button";
import CollectionItem from "../features/UI/CollectionItem";
import MainNavbar from "../features/UI/MainNavbar";
import MobileNavbar from "../features/UI/MobileNavbar";

export default function Collections() {
  // properties
  const { user } = useAuthContext();
  const { docs } = useCollection(`users/${user.uid}/category`);

  // components
  const activeItems =
    docs &&
    (docs as unknown as any[]).map((item: CategoryType) => (
      <CollectionItem key={item.id} {...item} />
    ));

  return (
    <main className="relative">
      <MobileNavbar title="Collections" />
      <MainNavbar burger={true} />
      <section className=" md:flex items-center justify-center">
        <div className="absolute top-24 h-fit w-full pb-24 px-4 overflow-scroll md:w-[600px] md:px-0 md:ml-36">
          <div className="hidden w-8/12 pb-8 pt-8 md:block">
            <h2 className="text-slate-200 text-2xl font-lg">Collections</h2>
          </div>
          <div className="flex flex-row items-start justify-center md:justify-start ">
            <div className="hidden md:block">
              <Button text="All collections" theme="dark" />
            </div>
            <Link to="/icons" className="ml-2 hidden md:block">
              <Button text="Add collection" theme="light" />
            </Link>
            <Link
              to="/icons"
              className=" bg-primary p-4 mb-4 rounded-full md:hidden"
            >
              <RiAddFill size={32} />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start">
            {activeItems}
          </div>
        </div>
      </section>
      <BottomNavbar />
    </main>
  );
}
