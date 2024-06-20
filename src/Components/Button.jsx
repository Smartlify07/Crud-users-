/* eslint-disable react/prop-types */
const Button = ({ background, value }) => {
  return (
    <button
      type="submit"
      className={`${background} px-5 py-3 rounded-sm text-white font-semibold`}
    >
      {value}
    </button>
  );
};

export default Button;
