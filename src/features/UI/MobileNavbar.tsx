import { useAuthContext } from "../../hooks/useAuthContext";
import Avatar from "./Avatar";

type Prop = {
  title: string;
};

export default function MobileNavbar({ title }: Prop) {
  const { user } = useAuthContext();
  return (
    <nav className=" bg-dark_500 w-full h-20 z-50 flex items-center justify-between px-4 md:hidden">
      <h1 className="text-2xl">{title}</h1>
      <Avatar src={user.photoURL} />
    </nav>
  );
}
