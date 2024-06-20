/* eslint-disable react/prop-types */
import AddUserForm from "../Components/AddUserForm";

const Create = ({ setUsers }) => {
  return (
    <section className="flex  py-20 items-center justify-center w-full">
      <AddUserForm setUsers={setUsers} />
    </section>
  );
};

export default Create;
