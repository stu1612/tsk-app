// files
import { CategoryType } from "../global";
import { useAuthContext } from "../hooks/useAuthContext";
import capitalizeString from "../utils/capitalizeString";
import greeting from "../utils/greeting";
import useCollection from "../hooks/useCollection";

// UI
import Avatar from "../features/UI/Avatar";
import BottomNavbar from "../features/UI/BottomNavbar";
import DashboardItem from "../features/UI/DashboardItem";
import MainNavbar from "../features/UI/MainNavbar";

export interface iCollection {
  id: string;
  isChecked: boolean;
  title: string;
  icon?: string;
  color?: string;
}

export default function Dashboard() {
  // properties
  const { user } = useAuthContext();
  const { docs } = useCollection(`users/${user.uid}/category`);

  // time of day message
  const timeOfDay = greeting();

  // components
  const GreetingMessage = (
    <h3 className="text-slate-200 text-3xl font-bold">
      {timeOfDay} <span>{capitalizeString(user.displayName)}</span>
    </h3>
  );

  const DashboardItems =
    docs &&
    (docs as unknown as any[]).map((item: CategoryType) => (
      <DashboardItem key={item.id} {...item} />
    ));

  return (
    <main className="relative">
      <MobileNavbar />
      <MainNavbar burger={true} />
      <div className=" md:flex items-center justify-center">
        <section className="absolute top-24 h-fit w-full pb-24 px-4 overflow-scroll md:w-[500px] md:px-0 ">
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
  const { user } = useAuthContext();
  return (
    <nav className="fixed bg-dark_500 w-full h-20 z-50 flex items-center justify-between px-2 md:hidden">
      <h1 className="text-2xl">Dashboard</h1>
      <Avatar src={user.photoURL} />
    </nav>
  );
};
