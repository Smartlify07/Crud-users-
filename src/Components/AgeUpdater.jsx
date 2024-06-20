import { useFormikContext } from "formik";
import { useEffect } from "react";

const AgeUpdate = () => {
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  const { values, setFieldValue } = useFormikContext();
  useEffect(() => {
    if (values.dob) {
      const age = calculateAge(values.dob);
      setFieldValue("age", age);
    }
  }, [values.dob, setFieldValue]);

  return null;
};
export default AgeUpdate;
