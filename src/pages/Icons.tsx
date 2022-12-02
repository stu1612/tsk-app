// files
import { useAuthContext } from "../hooks/useAuthContext";
import useAddCategory from "../hooks/useAddCategory";
import useCategoryContext from "../hooks/useCategoryContext";

type ItemProps = {
  id: string;
  title: string;
  icon: string;
  color: string;
};

export default function Icons() {
  // global state
  const { categories } = useCategoryContext();
  const { user } = useAuthContext();

  // properties
  const { addCategoryToCollection } = useAddCategory();

  const IconList =
    categories &&
    categories.map((item: ItemProps) => (
      <div
        key={item.id}
        onClick={() =>
          addCategoryToCollection(
            `users/${user.uid}/categories`,
            item.title,
            item.icon,
            item.color
          )
        }
      >
        <img src={item.icon} alt={item.title} />
      </div>
    ));
  return (
    <main>
      <div>
        <h1>Icons</h1>
      </div>
      <section>{IconList}</section>
    </main>
  );
}
