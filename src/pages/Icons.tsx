// npm
import { useState } from "react";

// files
import { useAuthContext } from "../hooks/useAuthContext";
import useAddCategory from "../hooks/useAddCategory";
import useCollection from "../hooks/useCollection";

// UI
import MainNavbar from "../features/UI/MainNavbar";
import Tooltip from "../features/UI/ToolTip";

type ItemProps = {
  id: string;
  title: string;
  icon: string;
  color: string;
  isChecked: boolean;
};

export default function Icons() {
  // properties
  const { docs } = useCollection(`categories`);

  const CategoryItems =
    docs &&
    (docs as unknown as any[]).map((item: ItemProps) => (
      <CategoryItem key={item.id} {...item} />
    ));

  return (
    <main className="relative">
      <MainNavbar burger={false} />
      <div className=" md:flex items-center justify-center">
        <section className="absolute top-0 h-fit w-full pb-24 px-2 overflow-scroll md:w-[500px] md:px-0 md:top-24">
          <div className="w-8/12 pb-8 pt-8 ">
            <h2 className="text-slate-200 text-2xl font-lg">Collection List</h2>
          </div>
          <div>{CategoryItems}</div>
        </section>
      </div>
    </main>
  );
}

function CategoryItem({ title, color, icon, isChecked }: ItemProps) {
  // local state
  const [hover, setHover] = useState(false);

  // properties
  const { addCategory } = useAddCategory();
  const { user } = useAuthContext();

  // methods
  function handleClick() {
    addCategory(`users/${user.uid}/category`, color, icon, isChecked, title);
  }

  return (
    <Tooltip title={title} placement="top">
      <button
        className={`bg-dark_500 border-2 rounded-3xl inline-block m-6 p-6 hover:animate-pulse`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={
          hover
            ? {
                borderColor: color,
                backgroundColor: color,
                transition: "ease-in 200ms",
              }
            : { borderColor: color }
        }
        onClick={handleClick}
      >
        <img src={icon} alt={title} className="h-8 w-8" />
      </button>
    </Tooltip>
  );
}
