import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Routes/Home";
import { useEffect, useState } from "react";
import RootLayout from "./layout/RootLayout";
import Create from "./Routes/Create";
import Edit from "./Routes/Edit";
function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={<Home setUsers={setUsers} users={users} />}
        ></Route>
        <Route path="create" element={<Create setUsers={setUsers} />}></Route>
        <Route
          path="edit/:id"
          element={<Edit users={users} setUsers={setUsers} />}
        ></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
