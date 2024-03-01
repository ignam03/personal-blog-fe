import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <>
      <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">Blog Dev</h1>
        </Link>
        <ul className="flex gap-x-2">
          {isAuthenticated ? (
            <>
              <li>Welcome {user?.userName} </li>
              <li>
                <Link to={"/articles"}>Articles</Link>
              </li>
              <li>
                <Link to={"/add-article"}>New Article</Link>
              </li>
              <Link to={"/profile"}>Profile</Link>
              <Link
                to={"/"}
                onClick={() => logout()}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <li>
                <Link
                  to={"/login"}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={"/register"}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      {/* <div className="m-auto flex size-full max-w-screen-2xl items-center justify-between px-3 py-4 2xl:px-12">
        <div className="flex flex-1 items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0">
          <button variant="text">
            
          </button>
        </div>
      </div> */}
    </>
  );
};
