/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import UsersList from "../Components/UsersList";

const Home = ({ setUsers, users }) => {
  return (
    <main className="py-10 flex flex-col items-center gap-10 justify-center overflow-x-hidden">
      <UsersList setUsers={setUsers} users={users} />

      <Outlet />
    </main>
  );
};

export default Home;
