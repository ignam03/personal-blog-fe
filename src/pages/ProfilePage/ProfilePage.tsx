import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMyProfileRequest } from "../../api/user";
import { setUser } from "../../redux/slices/userSlice";
import { AppDispatch } from "../../redux/store";
import { UserType } from "../../types/userType";

export const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [myProfile, setMyProfile] = useState<UserType | null>(null);
  useEffect(() => {
    const user = async () => {
      const res = await fetchMyProfileRequest();
      setMyProfile(res);
      dispatch(setUser(res.data));
    };
    user();
  }, [dispatch]);
  return (
    <>
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm mt-5">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-700 sm:col-span-2">Mr</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {myProfile?.firstName}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Occupation</dt>
            <dd className="text-gray-700 sm:col-span-2">{myProfile?.role}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Salary</dt>
            <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Email</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {myProfile?.email}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Bio</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {myProfile?.biography}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};
