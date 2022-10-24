import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { fireAuthContext } from "../../UserContext/UserContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const { user, userSingOut } = useContext(fireAuthContext);

  const [open, setOpen] = useState(false);
  const iconClick = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    userSingOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div
          onClick={iconClick}
          className=" md:hidden absolute right-0 mt-5 mr-5"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6  text-blue-500" />
          ) : (
            <Bars3Icon className="h-6 w-6  text-blue-500" />
          )}
        </div>
        <div className="flex-1">
          <img className="w-7 h-7" src="techlearners.png" alt="logo"></img>
          <a className="btn btn-ghost normal-case text-xl">TechLearners</a>
          <p>{user?.email}</p>
          <p>{user?.displayName}</p>
        </div>
        <div className="flex-none">
          <ul
            className={`menu menu-horizontal p-1   md:static absolute ${
              open
                ? "top-10 flex flex-col   w-full absolute left-0 p-3"
                : "top-[-120px]"
            }`}
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            {user?.email ? (
              <NavLink
                onClick={handleSignOut}
                className="mx-2 btn bg-orange-500 text-white"
              >
                Log out
              </NavLink>
            ) : (
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
            )}
            {/* <li>
              <NavLink to="/login">Login</NavLink>
            </li> */}
            <li>
              <NavLink className="" to="/register">
                Register
              </NavLink>
            </li>

            <div className="form-control mx-2">
              <label className="label cursor-pointer">
                <span className="label-text m-1 ">Toggle Theme</span>
                <input type="checkbox" className="toggle m-1" />
              </label>
            </div>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
