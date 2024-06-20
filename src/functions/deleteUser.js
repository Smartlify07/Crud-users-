export const deleteUser = (userId, setUsers) => {
  setUsers((prevState) =>
    prevState.filter((user) => (user.id !== userId ? user : null))
  );
};
