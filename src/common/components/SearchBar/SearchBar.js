import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";

export const SearchBar = () => {
  return (
    <div className="search-bar p-3"> 
      <div class="relative mt-1">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </div>
        <input
          type="text"
          id="email-adress-icon"
          class="border text-sm rounded block w-full pl-10 p-2.5 main-search-input"
          placeholder="Search for cobots, grippers, cameras, partners"
        />
      </div>
    </div>
  );
};
