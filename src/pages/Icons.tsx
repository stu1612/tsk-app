// npm
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// files
import { useAuthContext } from "../hooks/useAuthContext";
import useAddCategory from "../hooks/useAddCategory";
import useCollection from "../hooks/useCollection";

// UI
import MainNavbar from "../features/UI/MainNavbar";
import MobileNavbar from "../features/UI/MobileNavbar";
import Tooltip from "../features/UI/ToolTip";
import BottomNavbar from "../features/UI/BottomNavbar";

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
  const navigate = useNavigate();

  const CategoryItems =
    docs &&
    (docs as unknown as any[]).map((item: ItemProps) => (
      <CategoryItem key={item.id} {...item} />
    ));

  return (
    <main className="relative">
      <MobileNavbar title="Collection List" />
      <MainNavbar burger={false} />
      <section className=" md:flex items-center justify-center ">
        <div className="absolute top-24 h-fit w-full pb-24 px-4 overflow-scroll md:w-[600px] md:px-0 md:top-1/2 md:translate-y-1/2">
          <div className="flex flex-wrap justify-center">{CategoryItems}</div>
        </div>
      </section>
      <BottomNavbar />
    </main>
  );
}

function CategoryItem({ title, color, icon, isChecked }: ItemProps) {
  // local state
  const [hover, setHover] = useState(false);
  const [effect, setEffect] = useState(false);

  // properties
  const { addCategory } = useAddCategory();
  const { user } = useAuthContext();

  // methods
  function handleClick() {
    setEffect(true);
    addCategory(`users/${user.uid}/category`, color, icon, isChecked, title);
  }

  return (
    <Tooltip title={title} placement="top">
      <div className="flex flex-col justify-center items-center m-6">
        <button
          className={`bg-dark_500 border-2 rounded-3xl scale-100 inline-block mb-1 p-6  ${
            effect && "animate-wiggle"
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onAnimationEnd={() => setEffect(false)}
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
        <p className="md:hidden">{title}</p>
      </div>
    </Tooltip>
  );
}
