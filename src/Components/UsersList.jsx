/* eslint-disable react/prop-types */
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const UsersList = ({ setUsers, users }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState(null); // Use the current id for the deletemodal
  const toggleModal = () => {
    setShowDeleteModal((prevState) => !prevState);
  };
  return (
    <>
      <section
        className={`flex ${
          showDeleteModal && `blur-[2px]`
        } flex-col gap-4 font-rubik items-center lg:w-10/12`}
      >
        <h1 className="text-3xl text-center font-semibold text-slate-900">
          Users List
        </h1>
        {
          <table className="table-fixed mt-2  overflow-x-auto lg:w-full">
            <thead>
              <tr className="text-slate-900  lg:text-base">
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Age</th>
                <th className="px-4 py-4">Date of Birth</th>
              </tr>
            </thead>
            <tbody className="px-4">
              {users.map((user) => (
                <tr key={user.id} className="text-center  even:bg-slate-50">
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.age}</td>
                  <td className="border text-xs px-4 py-2 lg:text-sm">
                    {moment(user.dob).format("MMMM Do, YYYY")}
                  </td>
                  <td className=" px-4 py-2 flex items-center  justify-center gap-2">
                    <Link
                      to={`edit/${user.id}`}
                      className="bg-blue-500 text-sm font-semibold text-white px-2 py-1 transition-all rounded hover:bg-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        setId(user.id);
                        setShowDeleteModal(true);
                      }}
                      className="bg-red-500 text-sm font-semibold text-white px-2 py-1 transition-all rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }

        {users.length === 0 && (
          <h1 className="text-3xl font-semibold text-slate-900">No users</h1>
        )}
      </section>

      {showDeleteModal && (
        <DeleteModal
          id={id}
          showDeleteModal={showDeleteModal}
          toggleModal={toggleModal}
          setUsers={setUsers}
        />
      )}
    </>
  );
};

export default UsersList;
