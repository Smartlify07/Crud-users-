export const addUser = (newUser, setUsers) => {
  setUsers((prevState) => [...prevState, newUser]);
};
