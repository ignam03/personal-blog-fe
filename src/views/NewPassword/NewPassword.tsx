import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPasswordRequest } from "../../api/user";
import { useNavigate, useParams } from "react-router-dom";
import { NewPasswordType } from "../../types/NewPassword";

export const NewPassword = () => {
  const [updatePasswordErrors, setUpdatePasswordErrors] = useState("");
  const [type, setType] = useState("password");
  const params = useParams();
  const navigate = useNavigate();
  const { token } = params;
  const {
    register,
    handleSubmit,
    formState: { errors: UpdatePasswordErrors },
  } = useForm<NewPasswordType>();
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const onSubmit: SubmitHandler<NewPasswordType> = async (data) => {
    try {
      if (token) {
        const res = await resetPasswordRequest(token, data);
        navigate("/login");
        return res;
      }
    } catch (error: any) {
      console.log(error.response.data.message);
      setUpdatePasswordErrors(error.response.data.message);
    }
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Reset new Password</h1>

          <p className="mt-4 text-gray-500">
            recover your access and don't lose your project!
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
          <div>
            <label htmlFor="password" className="sr-only">
              New Password
            </label>

            <div className="relative">
              <input
                type={type}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="new password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
              />

              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                onClick={handleToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            {UpdatePasswordErrors.password && (
              <p className="bg-red-400 p-2 text-white-500 text-center rounded-lg mt-4">
                New Password is required
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
              save new password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
