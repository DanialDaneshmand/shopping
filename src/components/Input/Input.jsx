const Input = ({ name, label, formik, type }) => {
  return (
    <div className="w-full mb-8">
      <label className="block text-violet-900 font-bold" htmlFor={name}><span className="text-red-600">*</span>{label}</label>
      <input
      className="border border-violet-200 w-[20rem] sm:w-[30rem] p-2  mt-2 rounded-md focus:border-2 focus:border-violet-900 focus:outline-none"
        type={type}
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
