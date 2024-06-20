export const editUser = (userId, name, age, dob, setUsers) => {
  console.log(name);
  setUsers((prevState) =>
    prevState.map((user) =>
      user.id === userId ? { ...user, name: name, age: age, dob: dob } : user
    )
  );
};
