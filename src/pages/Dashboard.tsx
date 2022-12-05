// UI
import Avatar from "../features/UI/Avatar";
import DashboardItem from "../features/UI/DashboardItem";

// files
import { CategoryType } from "../global";
import { useAuthContext } from "../hooks/useAuthContext";
import useCategoryContext from "../hooks/useCategoryContext";
import greeting from "../utils/greeting";
import capitalizeString from "../utils/capitalizeString";
import MainNavbar from "../features/UI/MainNavbar";
import BottomNavbar from "../features/UI/BottomNavbar";

export interface iCollection {
  id: string;
  isChecked: boolean;
  title: string;
  icon?: string;
  color?: string;
}

export default function Dashboard() {
  // global state
  const { user } = useAuthContext();

  // properties
  const timeOfDay = greeting();
  const { categories } = useCategoryContext();

  const DashboardItems =
    categories &&
    categories.map((item: CategoryType) => (
      <DashboardItem key={item.id} {...item} />
    ));

  // components
  const GreetingMessage = (
    <h3 className="text-slate-200 text-3xl font-bold">
      {timeOfDay} <span>{capitalizeString(user.displayName)}</span>
    </h3>
  );

  return (
    <main className="relative">
      <MobileNavbar />
      <MainNavbar burger={true} />
      <div className=" md:flex items-center justify-center">
        <section className="absolute top-24 h-fit w-full pb-24 px-4 overflow-scroll md:w-[500px] md:px-0  ">
          <div className="hidden w-8/12 pb-8 pt-8 md:block">
            <h2 className="text-slate-200 text-2xl font-lg">Dashboard</h2>
          </div>
          <div className=" w-8/12 pb-12 pt-8">{GreetingMessage}</div>
          <div className="text-md rounded-lg py-2 px-5 mb-6 bg-slate-600 inline-grid">
            <small>Overview</small>
          </div>
          {DashboardItems}
        </section>
      </div>
      <BottomNavbar />
    </main>
  );
}

const MobileNavbar = () => {
  // global state
  const { user } = useAuthContext();

  return (
    <nav className="fixed bg-black w-full h-20 z-50 flex items-center justify-between px-2 md:hidden">
      <h1 className="text-2xl">Dashboard</h1>
      <Avatar src={user.photoURL} />
    </nav>
  );
};
