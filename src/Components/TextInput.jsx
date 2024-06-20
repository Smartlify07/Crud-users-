/* eslint-disable react/prop-types */
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-lg" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="border py-3 px-4 rounded-sm focus:outline-none"
        {...props}
        {...field}
      />
      {meta.touched && meta.error && (
        <p className="text-xs font-semibold text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default TextInput;
