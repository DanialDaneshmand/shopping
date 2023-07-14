import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth ,useAuthActions} from "../../Context/AuthProvider/AuthProvider";

const ProfilePage = () => {
  const userData = useAuth();
  const navigate = useNavigate();
  const setState = useAuthActions();
  const clickHandler = () => {
    localStorage.clear();
    setState(false);
    navigate("/");
  };
  return (
    <section className="w-full h-screen flex justify-center">
      <div className="bg-violet-200 border border-violet-300 rounded w-[300px] px-8 py-4 h-1/2 mt-44 flex flex-col items-center justify-between">
        <FaUserCircle className="text-[200px] text-violet-900 mb-8" />
        <div className="h-3/4 flex flex-col justify-around">
          <p className="text-violet-900 text-lg font-bold">
            Name: {userData.name}
          </p>
          <p className="text-violet-900 text-lg font-bold">
            Email: {userData.email}
          </p>
          <p className="text-violet-900 text-lg font-bold">
            Phone: {userData.phoneNumber}
          </p>
        </div>
        <button
          className="bg-violet-900 w-full py-1 rounded mt-16 text-white text-lg font-bold"
          onClick={clickHandler}
        >
          خروج
        </button>
      </div>
    </section>
  );
};

export default ProfilePage;
