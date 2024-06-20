/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import Button from "./Button";
import AgeUpdate from "./AgeUpdater";
import { addUser } from "../functions/addUser";
import { uid } from "uid";
import { useNavigate } from "react-router-dom";

const AddUserForm = ({ setUsers }) => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        age: "",
        dob: "",
      }}
      onSubmit={(values) => {
        const newUser = {
          id: uid(5),
          name: values.name,
          age: values.age,
          dob: values.dob,
        };
        addUser(newUser, setUsers);
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
      <Form className="flex flex-col w-10/12 gap-3  lg:w-1/3">
        <TextInput
          label={"Name"}
          type="text"
          placeholder="John Doe"
          name="name"
        />
        <TextInput
          label={"Date of Birth"}
          type="date"
          placeholder="01/01/2001"
          name="dob"
        />
        <TextInput label={"Age"} type="number" placeholder="18" name="age" />

        <AgeUpdate />

        <Button background={"bg-slate-900"} value={"Add user"} />
      </Form>
    </Formik>
  );
};

export default AddUserForm;
