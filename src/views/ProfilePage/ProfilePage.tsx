import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMyProfileRequest, updateMyProfileRequest } from "../../api/user";
import { setProfileUser } from "../../redux/slices/userSlice";
import { AppDispatch } from "../../redux/store";
import { UserType } from "../../types/userType";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNotification } from "../../context/NotificationContext";
import { ProfileLoader } from "../../components/profileLoader/ProfileLoader";

// interface IProfile {
//   userName: string;
//   email: string;
//   firstName?: string;
//   lastName?: string;
//   biography?: string;
//   role?: string;
// }

// type ProfileErrorsType = {
//   message: string;
// };
export const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserType>();
  const dispatch = useDispatch<AppDispatch>();
  const [enable, setEnable] = useState(false);
  const [myProfile, setMyProfile] = useState<UserType | null>(null);
  const { getError, getSuccess } = useNotification();
  useEffect(() => {
    const user = async () => {
      const res = await fetchMyProfileRequest();
      dispatch(setProfileUser(res));
      setMyProfile(res);
      setValue("userName", myProfile?.userName ?? "");
      setValue("email", myProfile?.email ?? "");
      setValue("firstName", myProfile?.firstName ?? "");
      setValue("lastName", myProfile?.lastName ?? "");
      setValue("biography", myProfile?.biography ?? "");
    };
    user();
  }, [dispatch]);
  const onSubmit: SubmitHandler<UserType> = async (data) => {
    const formData = new FormData();
    formData.append("userName", data.userName ?? "");
    formData.append("email", data.email ?? "");
    formData.append("firstName", data.firstName ?? "");
    formData.append("lastName", data.lastName ?? "");
    formData.append("biography", data.biography ?? "");
    formData.append("profileImage", data.profileImage ?? "");
    formData.append("file", data.file[0]);
    const res = await updateMyProfileRequest(formData);
    if (res.status === 200) {
      getSuccess("Profile updated successfully");
      setMyProfile(res.data.updatedUser);
      dispatch(setProfileUser(res.data.updatedUser));
    }
    if (res.status === 400) {
      getError(res.data.message);
    }
  };
  return (
    <div className="container mx-auto">
      {myProfile ? (
        <>
          <div className=" mt-5 flex justify-center rounded-md border mb-4 dark:text-darkGray">
            <label
              htmlFor="AcceptConditions"
              className="relative h-8 w-14 m-9 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-500"
            >
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
                onChange={() => setEnable(!enable)}
              />

              <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
            </label>
            {/* {profileErrors && (
          <p className="bg-red-400 text-center p-2 my-2 text-white-500 rounded-md">
            {(profileErrors as ProfileErrorsType).message}
          </p>
        )}  */}
            <form
              className="w-full max-w-lg mt-8 mb-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 dark:text-darkGray">
                    Profile
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Esta información se mostrará públicamente, así que tenga
                    cuidado. lo que compartes.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        Nombre de usuario
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      workcation.com/
                    </span> */}
                          <input
                            type="text"
                            {...register("userName", {
                              required: true,
                            })}
                            autoComplete="userName"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 dark:text-darkGray placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder={myProfile?.userName}
                            disabled={!enable}
                          />
                        </div>
                        {errors.userName && (
                          <p className="bg-red-400 p-2 text-white-500 text-center rounded-lg mt-4">
                            userName is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        biografia
                      </label>
                      <div className="mt-2">
                        <textarea
                          {...register("biography", { required: true })}
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder={myProfile?.biography}
                          disabled={!enable}
                        />
                        {errors.biography && (
                          <p className="bg-red-400 p-2 text-white-500 text-center rounded-lg mt-4">
                            biography is required
                          </p>
                        )}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Escribe algunas frases sobre ti.
                      </p>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="photo"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        Photo
                      </label>
                      <div className="mt-2 flex items-center gap-x-3">
                        <img
                          className="h-12 w-12 text-gray-300 rounded-full"
                          aria-hidden="true"
                          src={myProfile?.profileImage}
                        />

                        <input
                          type="file"
                          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          disabled={!enable}
                          {...register("file", {
                            required: true,
                          })}
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        Foto de cubierta
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          {/* <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    /> */}
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                disabled={!enable}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 dark:text-darkGray">
                    Informacion personal
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Utilice una dirección permanente donde pueda recibir correo.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        Nombre
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("firstName", { required: true })}
                          autoComplete="given-name"
                          placeholder={myProfile?.firstName}
                          className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          disabled={!enable}
                        />
                      </div>
                      {errors.firstName && (
                        <p className="bg-red-400 p-2 text-white-500 text-center rounded-lg mt-4">
                          first name is required
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        Apellido
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("lastName", { required: true })}
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          disabled={!enable}
                          placeholder={myProfile?.lastName}
                        />
                      </div>
                      {errors.lastName && (
                        <p className="bg-red-400 p-2 text-white-500 text-center rounded-lg mt-4">
                          last name is required
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          disabled={!enable}
                          placeholder={myProfile?.email}
                        />
                      </div>
                      {errors.email && (
                        <p className="bg-red-400 p-2 text-white-500 text-center rounded-lg mt-4">
                          email is required
                        </p>
                      )}
                    </div>

                    {/* <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 dark:text-darkGray"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      disabled={!enable}
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 dark:text-darkGray"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      disabled={!enable}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 dark:text-darkGray"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      disabled={!enable}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 dark:text-darkGray"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      disabled={!enable}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 dark:text-darkGray"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 dark:text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      disabled={!enable}
                    />
                  </div>
                </div> */}
                  </div>
                </div>

                {/* <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 dark:text-darkGray">
                Notifications
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 dark:text-darkGray">
                    By Email
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium dark:text-darkGray"
                        >
                          Comments
                        </label>
                        <p className="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-medium dark:text-darkGray"
                        >
                          Candidates
                        </label>
                        <p className="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-medium dark:text-darkGray"
                        >
                          Offers
                        </label>
                        <p className="text-gray-500">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 dark:text-darkGray">
                    Push Notifications
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    These are delivered via SMS to your mobile phone.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        Everything
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        Same as email
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 dark:text-darkGray"
                      >
                        No push notifications
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div> */}
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 dark:text-darkGray"
                  disabled={!enable}
                  onClick={() => setEnable(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={!enable}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <ProfileLoader />
        </>
      )}
    </div>
  );
};
