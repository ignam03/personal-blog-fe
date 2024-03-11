import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ConfirmAccount = () => {
  const params = useParams();
  const { token } = params!;
  const { confirmAccount } = useAuth();
  useEffect(() => {
    const confirmAcc = async () => {
      const res = confirmAccount(token);
      return res;
    };
    confirmAcc();
  });
  return (
    <div>
      {" "}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Welcome</h1>

          <p className="mt-4 text-gray-500">
            Now you can start writing great articles and commenting!
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-lg">
            <Link to="/login">Sign in</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
