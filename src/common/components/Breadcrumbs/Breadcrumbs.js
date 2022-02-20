import React from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Breadcrumbs = () => {
  let location = useLocation();
  let pathParams = location.pathname.split("/").filter((item) => item);
  return (
    <div>
      {pathParams.map((path, index) => (
        <a
          href="path"
          className="capitalize cursor-pointer mr-3 text-xs hover:text-green-400 transition delay-50 duration-300 ease-in-out"
          key={path}
        >
          {path}
          {index + 1 !== pathParams.length && (
            <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
          )}
        </a>
      ))}
    </div>
  );
};
