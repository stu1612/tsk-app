// files
import capitalizeString from "../../utils/capitalizeString";
import { CategoryType } from "../../global";
// import useCategoryContext from "../../hooks/useCategoryContext";

type Props = {
  show: boolean;
};

export default function SideBar({ show }: Props) {
  // const { categories } = useCategoryContext();

  // const activeItems =
  //   categories &&
  //   categories.map((item: CategoryType) => (
  //     <div
  //       key={item.id}
  //       className="flex flex-row justify-start items-center my-2 p-2 "
  //     >
  //       <div
  //         className="p-2 mr-3 rounded-t-xl rounded-b-2xl"
  //         style={{ backgroundColor: item.color }}
  //       >
  //         <img src={item.image} alt={item.title} className="h-6" />
  //       </div>
  //       <h3>{capitalizeString(item.title)}</h3>
  //     </div>
  //   ));

  return (
    <div
      className={`hidden fixed left-0 top-20 h-screen w-44  bg-gray-800 md:block mr-8 
      ${show ? "translate-x-0 " : "-translate-x-full"} `}
    >
      <h2>Collections</h2>
      {/* <div>{activeItems}</div> */}
    </div>
  );
}
