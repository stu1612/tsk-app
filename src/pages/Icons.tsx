// files
import MainNavbar from "../features/UI/MainNavbar";
import { useAuthContext } from "../hooks/useAuthContext";
import useAddCategory from "../hooks/useAddCategory";
import useCategoryContext from "../hooks/useCategoryContext";
import useCollection from "../hooks/useCollection";

type ItemProps = {
  id: string;
  title: string;
  icon: string;
  color: string;
};

export default function Icons() {
  // global state
  const { docs } = useCollection("categories");

  // properties
  const { addCategoryToCollection } = useAddCategory();
  const { user } = useAuthContext();

  const categories =
    docs &&
    (docs as unknown as any[]).map((item: ItemProps) => (
      <div
        key={item.id}
        className={`bg-dark_500 border-2 rounded-3xl inline-block m-6 p-6 hover:bg-${"item.color"}`}
        style={{ borderColor: item.color }}
        onClick={() =>
          addCategoryToCollection(
            `users/${user.uid}/categories`,
            item.title,
            item.icon,
            item.color
          )
        }
      >
        <img
          src={item.icon}
          alt={item.title}
          className="h-8 w-8"
          style={{ color: item.color }}
        />
      </div>
    ));

  return (
    <main className="relative">
      <MainNavbar burger={false} />
      <div className=" md:flex items-center justify-center">
        <section className="absolute top-0 h-fit w-full pb-24 px-2 overflow-scroll md:w-[500px] md:px-0 md:top-24">
          <div className="w-8/12 pb-8 pt-8 ">
            <h2 className="text-slate-200 text-2xl font-lg">Collection List</h2>
          </div>
          <div>{categories}</div>
        </section>
      </div>
    </main>
  );
}
