import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { createPopper } from "@popperjs/core";

import "./MainNav.scss";

export const MainNav = () => {
  const [prodDopdownPopoverShow, setProdDropdownPopoverShow] = useState(false);
  const [brandDopdownPopoverShow, setBrandDropdownPopoverShow] =
    useState(false);

  const prodbtnDropdownRef = React.createRef();
  const brandbtnDropdownRef = React.createRef();

  const prodPopoverDropdownRef = React.createRef();
  const brandPopoverDropdownRef = React.createRef();

  const openProdDropdownPopover = () => {
    createPopper(prodbtnDropdownRef.current, prodPopoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setProdDropdownPopoverShow(true);
  };
  const closeProdDropdownPopover = () => {
    setProdDropdownPopoverShow(false);
  };
  const openBrandDropdownPopover = () => {
    createPopper(brandbtnDropdownRef.current, brandPopoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setBrandDropdownPopoverShow(true);
  };
  const closeBrandDropdownPopover = () => {
    setBrandDropdownPopoverShow(false);
  };

  return (
    <div className="main-nav">
      <button
        className={
          "text-white font-bold caperalize text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
        }
        type="button"
        ref={prodbtnDropdownRef}
        onMouseEnter={(e) => {
          prodDopdownPopoverShow
            ? closeProdDropdownPopover()
            : openProdDropdownPopover();
        }}
        onMouseLeave={(e) => {
          prodDopdownPopoverShow
            ? closeProdDropdownPopover()
            : openProdDropdownPopover();
        }}
      >
        Products <FontAwesomeIcon className="ml-1" icon={faChevronDown} />
      </button>
      <div
        ref={prodPopoverDropdownRef}
        className={
          (prodDopdownPopoverShow ? "block " : "hidden ") +
          "dropdown-menu text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap"
          }
          onClick={(e) => e.preventDefault()}
        >
          EN
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap"
          }
          onClick={(e) => e.preventDefault()}
        >
          DU
        </a>
      </div>
      <button
        className={
          "text-white font-bold caperalize text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
        }
        type="button"
        ref={brandbtnDropdownRef}
        onMouseEnter={(e) => {
          brandDopdownPopoverShow
            ? closeBrandDropdownPopover()
            : openBrandDropdownPopover();
        }}
        onMouseLeave={(e) => {
          brandDopdownPopoverShow
            ? closeBrandDropdownPopover()
            : openBrandDropdownPopover();
        }}
      >
        Brands <FontAwesomeIcon className="ml-1" icon={faChevronDown} />
      </button>
      <div
        ref={brandPopoverDropdownRef}
        className={
          (brandDopdownPopoverShow ? "block " : "hidden ") +
          "dropdown-menu text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap"
          }
          onClick={(e) => e.preventDefault()}
        >
          EN
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap"
          }
          onClick={(e) => e.preventDefault()}
        >
          DU
        </a>
      </div>
    </div>
  );
};

export default MainNav;
