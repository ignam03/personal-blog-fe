import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type ILogin = {
  username: string;
  password: string;
};
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const { singIn, isAuthenticated, errors: SignInErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ILogin> = (data) => {
    singIn(data);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {SignInErrors && (
          <p className="bg-red-400 p-2 my-2 text-white-500">
            {SignInErrors.message}
          </p>
        )}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label htmlFor="">Username</label>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="email"
            />
            {errors.username && (
              <p className="bg-red-400 p-2 text-white-500">
                Username is required
              </p>
            )}
          </div>
          <div className="">
            <label htmlFor="">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Password"
            />
            {errors.password && (
              <p className="bg-red-400 p-2 text-white-500">
                password is required
              </p>
            )}
          </div>
          <button
            className="w-full bg-green-700 text-white px-4 py-2 rounded-md my-2"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
