import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { logo2 } from "../../assets/index.js";
import { Link } from "react-router-dom";
import SignUp from "../Signup/Signup.jsx";
import LogOut from "../Logout/Logout.jsx";
import LogIn from "../LogIn/Login.jsx";
import { useSelector } from "react-redux";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [id, setid] = React.useState("");
  const contextId = useSelector((state) => state.user.id);

  console.log(id === "");
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center justify-center gap-3">
            <img src={logo2} alt="" className="h-20 w- mt-[15px]" />
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <Link to="/chatbot">
                <button className="primary-btn">Chat with S.A.M</button>
              </Link>
              {contextId === "" ? (
                <>
                  <LogIn />
                  <SignUp />
                  
                </>
              ) : (
                <>
                <Link to="/dashboard">
                    <button className="primary-btn">Dashboard</button>
                  </Link>
                <LogOut />
                </>

              )}

              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
