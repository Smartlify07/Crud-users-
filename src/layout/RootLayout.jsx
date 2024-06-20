import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default RootLayout;
