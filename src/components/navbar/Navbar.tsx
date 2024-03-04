import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Dropdown } from "../dropdown/dropdown";
import { Button } from "../button/button";
import { Avatar } from "../avatar/avatar";

export const Navbar = () => {
  const { isAuthenticated, user } = useAuth();

  const LogoText = () => {
    return <h1 className="text-2xl font-bold text-black">Blog Dev</h1>;
  };

  function FooterColumn() {
    return (
      <div className="flex flex-col">
        <p className="mb-4 text-sm font-semibold leading-tight text-blue-950">
          Column
        </p>
        <div className="flex flex-col gap-4">
          <a href="/" className="text-sm leading-tight text-slate-500">
            Footer Link
          </a>
          <a href="/" className="text-sm leading-tight text-slate-500">
            Footer Link
          </a>
          <a href="/" className="text-sm leading-tight text-slate-500">
            Footer Link
          </a>
          <a href="/" className="text-sm leading-tight text-slate-500">
            Footer Link
          </a>
        </div>
      </div>
    );
  }
  return (
    <>
      {isAuthenticated ? (
        <div className="m-auto flex size-full max-w-screen-2xl items-center justify-between px-3 py-4 2xl:px-12 bg-white">
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
              className="stroke-black px-2 text-black font-bold"
            >
              Articles
            </Link>
            <Link
              to={"/about"}
              className="stroke-black px-2 text-black font-bold"
            >
              About
            </Link>
            <Link
              to={"/my-articles"}
              className="stroke-black px-2 text-black font-bold"
            >
              My Articles
            </Link>
            <Link
              to={"/contact"}
              className="stroke-black px-2 text-black font-bold "
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <Avatar size="small" elevated src={user?.profileImage} />
            <span className="hidden text-sm font-semibold md:inline text-black">
              {user?.userName}
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
        <div className="m-auto flex size-full max-w-screen-2xl items-center justify-between px-3 py-4 2xl:px-12 bg-white">
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
              className="stroke-black px-2 text-black font-bold"
            >
              Articles
            </Link>
            <Link
              to={"/about"}
              className="stroke-black px-2 text-black font-bold"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="stroke-black px-2 text-black font-bold"
            >
              Contact
            </Link>
          </div>
          <div className="flex justify-end gap-2 2xl:flex-1">
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
