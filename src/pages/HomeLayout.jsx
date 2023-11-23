import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>This is navbar</nav>

      <Outlet />
      <footer>This is footer</footer>
    </div>
  );
};
export default HomeLayout;
