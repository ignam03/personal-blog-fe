import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { forgotPasswordRequest } from "../../api/auth";

export const ResetPassword = () => {
  const [updatePasswordErrors, setUpdatePasswordErrors] = useState("");
  const [updatePasswordSuccess, setUpdatePasswordSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors: UpdatePasswordErrors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const res = await forgotPasswordRequest(data);
      if (res.status === 201) {
        setUpdatePasswordSuccess("Check your email to reset your password");
      }
      return res;
    } catch (error: any) {
      console.log(error.response.data.message);
      setUpdatePasswordErrors(error.response.data.message);
    }
  };
  setTimeout(() => {
    setUpdatePasswordSuccess("");
    setUpdatePasswordErrors("");
  }, 5000);
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Restablecer la contraseña
          </h1>

          <p className="mt-4 text-gray-500">
            ¡Recupera tu acceso y no pierdas tu proyecto!
          </p>
        </div>

        <form
          action="#"
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {updatePasswordErrors && (
            <p className="bg-red-400 text-center p-2 my-2 text-white-500 rounded-md">
              {updatePasswordErrors}
            </p>
          )}
          {updatePasswordSuccess && (
            <p className="bg-green-400 text-center p-2 my-2 text-white-500 rounded-md">
              {updatePasswordSuccess}
            </p>
          )}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="email"
                {...register("email", {
                  required: true,
                })}
              />
            </div>
            {UpdatePasswordErrors.oldPassword && (
              <p className="bg-red-400 p-2 text-white-500 text-center rounded-lg mt-4">
                old Password is required
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <a className="underline" href="#"></a>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
