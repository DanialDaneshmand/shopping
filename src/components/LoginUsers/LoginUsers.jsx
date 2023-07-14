import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import queryString from "query-string";
import Input from "../Input/Input";
import loginUser from "../../httpSevices/loginService";
import {
  useAuth,
  useAuthActions,
} from "../../Context/AuthProvider/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("ایمیل الزامی است")
    .email("فرمت ایمیل صحیح نیست"),
  password: Yup.string()
    .required("رمز عبور الزامی است")
    .min(8, "رمز عبور حداقل باید هشت کاراکتر باشد"),
});

const LoginForm = (props) => {
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      if (query.redirect) {
        navigate('/checkOut')
      } else {
        navigate("/");
      }
      toast.success("ورود با موفقیت انجام شد");
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
    <div className="w-full flex items-center justify-center h-screen p-0">
      <form onSubmit={formik.handleSubmit}>
        <Input type="text" name="email" label="Email" formik={formik} />

        <Input
          type="password"
          name="password"
          label="Password"
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
        <Link to="/signup">
          <p className="mt-4 ml-0">هنوز ثبت نام نکرده اید ؟</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
