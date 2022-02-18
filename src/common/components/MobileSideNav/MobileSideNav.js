import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./MobileSideNav.scss";

export const MobileSideNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="mobile-sidemenu">
      <FontAwesomeIcon
        style={{visibility: showSidebar && "hidden"}}
        className="menu-icon"
        onClick={() => setShowSidebar(!showSidebar)}
        icon={faBars}
      />
      <div
        className={`top-0 right-0 w-[35vw] bg-blue-600  p-2 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <button
          className="flex w-full justify-end text-4xl text-white items-center cursor-pointer"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <h2 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h2>
      </div>
    </div>
  );
};
