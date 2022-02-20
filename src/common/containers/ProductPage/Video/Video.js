import React, { useState } from "react";

import "./Video.scss";

export const Video = ({ video }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="p-4">
      <div className="relative">
        <video className="product-video mb-12 " controls controlsList="nodownload">
          <source src={video.src} type="video/mp4" />
        </video>
        <div
          className={isActive ? "hidden" : "video-overlay"}
          onClick={() => setActive(!isActive)}
        ></div>
      </div>
      {video.title}
    </div>
  );
};
