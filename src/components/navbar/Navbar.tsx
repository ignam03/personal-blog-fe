import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Dropdown } from "../dropdown/Dropdown";
import { Avatar } from "../avatar/Avatar";
import { Button } from "../button/Button";
import { useSelector } from "react-redux";
import { Switcher } from "../switcher/Switcher";

interface StateType {
  user: {
    profileImage: string;
    id: number;
    userName: string;
  };
}

export const Navbar = () => {
  const { isAuthenticated, user } = useAuth();
  const myUser = useSelector((state: StateType) => state.user);
  const LogoText = () => {
    return (
      <Link
        to={"/"}
        className="text-2xl font-bold text-black dark:text-darkGray"
      >
        Blog Dev
      </Link>
    );
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="m-auto flex size-full max-w-screen-2xl items-center justify-between px-3 py-4 2xl:px-12 dark:bg-evil dark:text-darkGray">
          <div className="flex flex-1 items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0 dark:text-darkGray">
            <Button
              variant="text"
              size="xsmall"
              iconOnly
              aria-label="Menu"
              className="lg:hidden"
            >
              {/* <MenuIcon className="stroke-inherit" /> */}
            </Button>
            <LogoText />
          </div>
          <div className="hidden gap-8 lg:flex">
            <Link
              to={"/articles"}
              className="stroke-black px-2 text-black font-bold dark:text-darkGray"
            >
              Artículos
            </Link>
            <Link
              to={"/about"}
              className="stroke-black px-2 text-black font-bold dark:text-darkGray"
            >
              Acerca de nosotros
            </Link>
            <Link
              to={"/my-articles"}
              className="stroke-black px-2 text-black font-bold dark:text-darkGray"
            >
              Mis artículos
            </Link>
            <Link
              to={"/contact"}
              className="stroke-black px-2 text-black font-bold  dark:text-darkGray"
            >
              Contacto
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <label
              htmlFor="check"
              className="bg-lightGray py-1 px-1 w-[52px] h-[32px] rounded-full has-[:checked]:pl-6 transition-all duration-200"
              onChange={() => {
                document.body.classList.toggle("dark");
              }}
            >
              <div className="w-6 h-6 rounded-full bg-darkGray">
                <input id="check" type="checkbox" hidden />
              </div>
            </label>
            <Avatar elevated src={myUser?.profileImage ?? user?.profileImage} />
            <span className="hidden text-sm font-semibold md:inline text-black dark:text-darkGray">
              {myUser.userName ?? user?.userName}
            </span>
            <Button
              variant="text"
              size="xsmall"
              iconOnly
              aria-label="Search"
              className="hidden md:inline-flex"
            >
              <Dropdown />
            </Button>
          </div>
        </div>
      ) : (
        <div className="m-auto flex size-full max-w-screen-2xl items-center justify-between px-3 py-4 2xl:px-12">
          <div className="flex flex-1 items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0">
            <Button
              variant="text"
              size="xsmall"
              iconOnly
              aria-label="Menu"
              className="lg:hidden"
            >
              {/* <MenuIcon className="stroke-inherit" /> */}
            </Button>
            <LogoText />
          </div>
          <div className="hidden gap-8 lg:flex">
            <Link
              to={"/articles"}
              className="stroke-black px-2 text-black font-bold dark:text-darkGray"
            >
              Artículos
            </Link>
            <Link
              to={"/about"}
              className="stroke-black px-2 text-black font-bold dark:text-darkGray"
            >
              Acerca de nosotros
            </Link>
            <Link
              to={"/contact"}
              className="stroke-black px-2 text-black font-bold dark:text-darkGray"
            >
              Contacto
            </Link>
          </div>
          <div className="flex justify-end gap-2 2xl:flex-1 dark:text-darkGray">
            <Switcher />
            {/* <Button className="hidden md:inline-flex">Login</Button>
            <Button className="hidden min-[375px]:inline-flex">Register</Button> */}
            <Link
              to={"/login"}
              className="bg-blue-700 hover:bg-indigo-900 text-white  font-bold py-2 px-4 rounded-lg"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="bg-blue-700 hover:bg-indigo-900 text-white  font-bold py-2 px-4 rounded-lg"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
