import { useDispatch } from "react-redux";
import { deleteUser } from "../app/users/usersSlice";

/* eslint-disable react/prop-types */
const DeleteModal = ({ toggleModal, userId }) => {
  console.log(userId);
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-white blur-none z-10 shadow-lg px-6 py-6 rounded-md -translate-y-[100%] transition-all`}
    >
      <h3 className="text-gray-500">
        Are you sure you want to delete this user?
      </h3>

      <div className={`flex items-center justify-center gap-5 mt-4 `}>
        <button
          onClick={toggleModal}
          className="px-4 py-3 rounded-sm text-white bg-gray-300 transition-all hover:bg-gray-400"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            dispatch(
              deleteUser({
                userId,
              })
            );
            toggleModal();
          }}
          className="px-4 py-3 rounded-sm text-white bg-red-500 transition-all hover:bg-red-600"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
