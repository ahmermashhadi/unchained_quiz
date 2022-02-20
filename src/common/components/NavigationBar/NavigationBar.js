import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { createPopper } from "@popperjs/core";

import "./NavigationBar.scss";

export const NavigationBar = ({ color }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");

  return (
    <div className="navigation-bar">
      <button
        className={
          "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
          bgColor
        }
        type="button"
        ref={btnDropdownRef}
		onMouseEnter={e => {
			dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
		}}
		onMouseLeave={e => {
			dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
		}}
      >
        <FontAwesomeIcon icon={faGlobe} /> EN
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "dropdown-menu text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap" +
            (color === "white" ? " text-blueGray-700" : "text-white")
          }
          onClick={(e) => e.preventDefault()}
        >
          EN
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap" +
            (color === "white" ? " text-blueGray-700" : "text-white")
          }
          onClick={(e) => e.preventDefault()}
        >
          DU
        </a>
      </div>
      <button
        className={
          "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
          bgColor
        }
        type="button"
      >
        <FontAwesomeIcon icon={faUser} /> Login
      </button>
    </div>
  );
};
