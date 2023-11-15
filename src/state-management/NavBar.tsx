import LoginStatus from "./LoginStatus";
import useTasks from "./hooks/useTasks";

const NavBar = () => {
  const { tasks } = useTasks();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
