import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Video } from "../Video/Video";

import "./Features.scss";

export const Features = ({ productFeatures }) => {
  return (
    <div className="product-features">
      <h1 className="features-title">Features</h1>
      <section className="features-details w-full">
        <div className="features-description w-1/2">
          <p className="mb-4">{productFeatures.description1}</p>
          <p className="mb-4">{productFeatures.description2}</p>
        </div>
        <div className="w-1/2">
          <div className="features-specifications ">
            {productFeatures.details.map((detail) => (
              <div key={detail.title} className="mb-8">
                <h1 className="spec-title">{detail.title}</h1>
                <p className="spec-description">{detail.description}</p>
              </div>
            ))}
          </div>
          <div className="features-info">
            {productFeatures.infoBox.map((info) => (
              <div key={info.title} className="mb-8">
                <h1 className="info-title">
                  <FontAwesomeIcon
                    color="#36FF9A"
                    className="mr-4"
                    icon={faCheckCircle}
                  />
                  {info.title}
                </h1>
                <p className="info-description">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-3">
        {productFeatures.videos.map((video) => (
          <Video key={video.title} video={video} />
        ))}
      </div>
    </div>
  );
};
