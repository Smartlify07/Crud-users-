/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import EditUserForm from "../Components/EditUserForm";

const Edit = ({ users, setUsers }) => {
  const { id } = useParams();

  const filtered = users.filter((user) => {
    return user.id === id;
  });

  const user = filtered[0];

  return (
    <section className="py-10 flex items-center justify-center">
      <EditUserForm
        userId={id}
        name={user.name}
        users={users}
        setUsers={setUsers}
        age={user.age}
        dob={user.dob}
      />
    </section>
  );
};

export default Edit;
