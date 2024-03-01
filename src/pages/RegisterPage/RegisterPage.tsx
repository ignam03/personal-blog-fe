import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

type IRegister = {
  firstName: string;
  userName: string;
  email: string;
  password: string;
};
export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>();
  const { singUp, isAuthenticated, errors: SignUpErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    await singUp(data);
  };

  useEffect(() => {
    if (isAuthenticated)
      //window.location.href = "/";
      navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        {SignUpErrors && (
          <p className="bg-red-400 p-2 text-white-500">
            {SignUpErrors.message}
          </p>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label htmlFor="username">FirstName</label>
            <input
              type="text"
              {...register("firstName", { required: true, maxLength: 9 })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Username"
            />
            {errors.firstName && (
              <p className="bg-red-400 p-2 text-white-500">
                First Name is required
              </p>
            )}
          </div>
          <div className="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              {...register("userName", { required: true, maxLength: 9 })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Username"
            />
            {errors.userName && (
              <p className="bg-red-400 p-2 text-white-500">
                Username is required
              </p>
            )}
          </div>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/ })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Email"
            />
            {errors.email && (
              <p className="bg-red-400 p-2 text-white-500">invalid email</p>
            )}
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 9,
                maxLength: 20,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
              })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Password"
            />
            {errors.password && (
              <p className="bg-red-400 p-2 text-white-500">invalid password</p>
            )}
          </div>
          <button
            className="w-full bg-green-700 text-white px-4 py-2 rounded-md my-2"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Already Have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
