import React, { useState } from "react";
import menu from "../assets/menu-2-fill.svg";

const Nav = () => {

    const [sidebar, setsidebar] = useState(false)
    const [registerBtn, setregisterBtn] = useState(false)

  return (
    <nav className="select-none relative h-20 w-full flex items-center justify-between pl-5 pr-5 border-b-2 border-gray-400 text-secondary font-semibold font-Inter">
      <div className="menu h-full flex items-center gap-6 text-lg">
        <i className="font-InterIcons ri-menu-fill text-2xl font-medium" onClick={() => setsidebar(!sidebar)}></i>
        <div className="tracking-wide">
          <span className="text-primary">Intern</span>ify
        </div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="bg-primary text-white cursor-pointer px-3 py-2 text-sm rounded" onClick={() => setregisterBtn(!registerBtn)}>
          Register <i className="ri-arrow-down-s-fill font-InterIcons"></i>
        </div>
        { registerBtn ? <ul className="absolute top-full right-0 w-36 shadow-lg text-sm py-3 bg-white rounded-b">
          <li className="h-8 pl-3 flex items-center">As a Student</li>
          <li className="h-8 pl-3 flex items-center">As an Employer</li>
        </ul>: ""}
      </div>

      { sidebar ? <div className="fixed top-0 left-0 h-[100vh] w-full bg-[#00000066] flex justify-between overflow-hidden">
        <aside className="h-full w-[80%] bg-white p-10 font-normal">
          <ul className="w-full border-b-2">
            <li className="flex justify-between items-center h-14">
              Internships
            </li>
            <li className="flex justify-between items-center h-14">Jobs</li>
            <li className="flex justify-between items-center h-14">
              Contact Us
            </li>
          </ul>
          <ul className="w-full border-b-2">
            <li className="flex justify-between items-center h-14">
              Register - As a Student
            </li>
            <li className="flex justify-between items-center h-14">
              Register - As a Employer
            </li>
            <li className="flex justify-between items-center h-14">Login</li>
          </ul>
        </aside>
        <div className="pr-6 pt-10 cursor-pointer"><span className="bg-white py-2 px-3 font-InterIcons" onClick={() => setsidebar(!sidebar)}>⨉</span></div>
      </div> : ""}
    </nav>
  );
};

export default Nav;
