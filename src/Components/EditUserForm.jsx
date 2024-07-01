/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextInput from "./TextInput";
import AgeUpdate from "./AgeUpdater";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { editUser } from "../app/users/usersSlice";

const EditUserForm = ({ userId, name, age, dob, setUsers }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          name: name,
          age: age,
          dob: dob,
        }}
        onSubmit={(values) => {
          console.log(values);
          // editUser(userId, values.name, values.age, values.dob, setUsers);
          dispatch(
            editUser({
              userId,
              name: values.name,
              age: values.age,
              dob: values.dob,
            })
          );
          navigate("/");
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Invalid name")
            .required("User's name is required"),

          age: Yup.number()
            .min(10, "User must be more than 10 years old")
            .required("User's age is required"),
          dob: Yup.string().required("User's date of birth is required"),
        })}
      >
        <Form className="flex w-10/12 flex-col gap-3  lg:w-1/3">
          <TextInput
            label={"Name"}
            type="text"
            placeholder="John Doe"
            name="name"
          />
          <TextInput label={"Age"} type="number" placeholder="18" name="age" />
          <TextInput
            label={"Date of Birth"}
            type="date"
            placeholder="01/01/2001"
            name="dob"
          />

          <AgeUpdate />

          <Button background={"bg-slate-900"} value={"Update"} />
        </Form>
      </Formik>
    </>
  );
};

export default EditUserForm;
