import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import queryString from "query-string";
import Input from "../Input/Input";
import signupUser from "../../httpSevices/signupService";
import { useAuthActions } from "../../Context/AuthProvider/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام الزامی است")
    .min(6, "نام حداقل باید شش کاراکتر باشد"),
  phoneNumber: Yup.string()
    .required("شماره تلفن الزامی است ")
    .matches(/^[0-9]{11}$/, "فرمت شماره تلفن صحیح نمی باشد"),
  passwordConfirmation: Yup.string()
    .required("تکرار رمز عبور الزامی است ")
    .oneOf([Yup.ref("password"), null], "تکرار رمز عبور  صحیح نمی باشد"),
  email: Yup.string()
    .required("ایمیل الزامی است")
    .email("فرمت ایمیل صحیح نیست"),
  password: Yup.string()
    .required("رمز عبور الزامی است")
    .min(8, "رمز عبور حداقل باید هشت کاراکتر باشد"),
});

const SignupForm = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      password,
      phoneNumber,
    };
    try {
      const { data } = await signupUser(userData);
      toast.success("ثبت نام با موفقیت انجام شد");
      setAuth(data);
      if (query.redirect) {
        navigate('/checkOut')
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className="w-full flex items-center justify-center h-screen p-0 mt-28">
      <form onSubmit={formik.handleSubmit}>
        <Input type="text" name="name" label="Name" formik={formik} />
        <Input type="text" name="email" label="Email" formik={formik} />
        <Input
          type="tel"
          name="phoneNumber"
          label="PhoneNumber"
          formik={formik}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          formik={formik}
        />
        <Input
          type="password"
          name="passwordConfirmation"
          label="PasswordConfirmation"
          formik={formik}
        />

        <button
          type="submit"
          className={
            formik.isValid
              ? "bg-violet-900 rounded-md text-white py-2 px-5"
              : "bg-violet-200 rounded-md text-white py-2 px-5"
          }
          disabled={!formik.isValid}
        >
          Login
        </button>
        <Link to={`${query.redirect?`/login?redirect=${query.redirect}`:"/login"}`}>
          <p className="mt-4 ml-0">قبلا ثبت نام کرده اید ؟</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
