// files
import { useAuthContext } from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";
import { CategoryType } from "../../global";

type Props = {
  show: boolean;
};

export default function SideBar({ show }: Props) {
  // properties
  const { user } = useAuthContext();
  const { docs } = useCollection(`users/${user.uid}/category`);

  // components
  const activeItems =
    docs &&
    (docs as unknown as any[]).map((item: CategoryType) => (
      <SidebarItem key={item.id} {...item} />
    ));

  return (
    <div
      className={`hidden fixed left-0 top-20 h-screen w-40 transition ease-in duration-200 bg-gray-800 md:block mr-8 
      ${show ? "translate-x-0 " : "-translate-x-full"} `}
    >
      <h2 className="p-4">Collections</h2>
      <div>{activeItems}</div>
    </div>
  );
}

function SidebarItem({ color, title, icon }: CategoryType) {
  return (
    <div className="flex flex-row justify-start items-center my-1 px-4 py-2 ">
      <div
        className="p-2 mr-3 rounded-t-xl rounded-b-2xl"
        style={{ backgroundColor: color }}
      >
        <img src={icon} alt={title} className="h-6" />
      </div>
      <h3 className="capitalize">{title}</h3>
    </div>
  );
}
