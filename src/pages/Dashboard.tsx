// files
import { CategoryType } from "../global";
import { useAuthContext } from "../hooks/useAuthContext";
import capitalizeString from "../utils/capitalizeString";
import greeting from "../utils/greeting";
import useCollection from "../hooks/useCollection";

// UI
import BottomNavbar from "../features/UI/BottomNavbar";
import DashboardItem from "../features/UI/DashboardItem";
import MainNavbar from "../features/UI/MainNavbar";
import MobileNavbar from "../features/UI/MobileNavbar";

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
      <MobileNavbar title="Dashboard" />
      <MainNavbar burger={true} />
      <section className="grid md:flex items-center justify-center">
        <div className="absolute top-24 h-fit w-full pb-24 px-4 overflow-scroll md:w-[600px] md:px-0 md:ml-36">
          <div className="hidden w-8/12 pb-8 pt-8 md:block">
            <h2 className="text-slate-200 text-2xl font-lg">Dashboard</h2>
          </div>
          <div className=" w-8/12 pb-12 pt-8">{GreetingMessage}</div>
          <div className="text-md rounded-lg py-2 px-5 mb-6 bg-slate-600 inline-grid">
            <small>Overview</small>
          </div>
          {DashboardItems}
        </div>
      </section>
      <BottomNavbar />
    </main>
  );
}
