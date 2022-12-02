import useLogout from "../hooks/useLogout";
import Loading from "../features/UI/Loading";

export default function Dashboard() {
  const { logout, loading } = useLogout();
  return (
    <>
      <div>Dashboard</div>
      <button onClick={logout}>Logout</button>
      {loading && <Loading />}
    </>
  );
}
