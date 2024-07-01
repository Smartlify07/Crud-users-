import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")),
};

console.log(initialState);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: {
      reducer: (state, action) => {
        state.users.push(action.payload);
        localStorage.setItem("users", JSON.stringify(state.users));
      },
      prepare: (name, age, dob) => {
        const id = nanoid();
        return { payload: { id, name, age, dob } };
      },
    },

    editUser: {
      reducer: (state, action) => {
        state.users.filter((user) => {
          if (user.id === action.payload.userId) {
            console.log(action.payload);
            user.name = action.payload.name;
            user.age = action.payload.age;
            user.dob = action.payload.dob;
          } else {
            return user;
          }
        });

        localStorage.setItem("users", JSON.stringify(state.users));
      },
    },

    deleteUser: {
      reducer: (state, action) => {
        const filteredUsers = state.users.filter(
          (user) => user.id !== action.payload.userId
        );
        state.users = filteredUsers;
        localStorage.setItem("users", JSON.stringify(filteredUsers));
      },
    },
  },
});

export const { addNewUser, editUser, deleteUser } = usersSlice.actions;
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
