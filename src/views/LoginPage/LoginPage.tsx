import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { GoogleAuth } from "../../components/googleAuth/GoogleAuth";

type ILogin = {
  username: string;
  password: string;
};
type SignInErrorsType = {
  message: string;
};
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const {
    singIn,
    isAuthenticated,
    errors: SignInErrors,
  } = useAuth();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ILogin> = (data) => {
    singIn(data);
  };

  // const handleGoogleLogin: SubmitHandler<any> = async () => {
  //   const res = await signInWithGoogle();
  //   console.log(res);
  // };

  useEffect(() => {
    if (isAuthenticated) navigate("/articles");
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:text-darkGray">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Iniciar sesión en su cuenta
          </h2>
          {SignInErrors && (
            <p className="bg-red-400 text-center p-2 my-2 text-white-500 rounded-md">
              {(SignInErrors as SignInErrorsType).message}
            </p>
          )}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Nombre de usuario o correo electrónico
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                    Username is required
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <Link
                    to="/reset-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    ¿Has olvidado tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  autoComplete="current-password"
                  {...register("password", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                    password is required
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between space-x-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
               <GoogleAuth /> 
              {/* <button onClick={handleGoogleLogin}>google</button> */}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No es un miembro?{" "}
            <Link
              to={"/register"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              ¡Regístrate ahora!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
