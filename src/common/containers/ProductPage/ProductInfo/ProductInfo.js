import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

import "./ProductInfo.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const ProductInfo = ({ productInfo }) => {
  const [varient, setVarient] = useState();

  return (
    <div>
      <div className="product-info">
        <div className="product-slider w-6/12 drop-shadow-xl">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            animation="cubeAnimation"
          >
            {productInfo.images.map((image) => (
              <div data-src={image} />
            ))}
          </AutoplaySlider>
        </div>
        <div className="product-information w-6/12 h-full px-12">
          <div className="title-section">
            <h1 className="font-bold text-3xl">{productInfo.name}</h1>
            <FontAwesomeIcon
              className="cursor-pointer hover:text-green-400 transition delay-50 duration-300 ease-in-out"
              icon={faBookmark}
              size="xl"
            />
          </div>
          <div className="product-detail-section">
            <div className="product-weight w-1/2">
              <h2 className="text-base font-bold">Weight</h2>
              <h2 className="text-2xl leading-4	font-bold">
                {productInfo.weight}
              </h2>
            </div>
            <div className="product-payload w-1/2">
              <h2 className="text-base font-bold">Payload</h2>
              <h2 className="text-2xl leading-4 font-bold">
                {productInfo.payload}
              </h2>
            </div>
          </div>
          <div className="product-description font-light">
            {productInfo.description}
          </div>

          <button
            type="button"
            class="w-full mt-8 bg-white hover:bg-gray-900 hover:text-white rounded-full px-5 py-2.5 text-left mr-2 mb-2 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 transition delay-50 duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-4" />
            Compare
          </button>
          <div className="border-b-2">
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Varient
              </label>
              <select
                onChange={(e) => setVarient(e.target.value)}
                id="countries"
                class="varient-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Choose an option</option>
                {productInfo.varients.map((v) => (
                  <option key={v.type} value={v.amount}>
                    {v.type}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => setVarient("")}
              class="w-full mt-4 bg-white rounded-full px-5 text-left mr-2"
            >
              Clear
            </button>
          </div>
          <div className="font-bold mt-8">
            <span className="text-2xl">{varient}</span>{" "}
            {varient && <span className="ml-2">excl. VAT</span>}{" "}
          </div>
          <div>
            <button
              type="button"
              class="w-full border-2 mt-2 bg-white hover:text-white hover:bg-[#313130] rounded-full px-5 py-2.5 text-centre mr-2 mb-2 transition delay-50 duration-300 ease-in-out"
            >
              Add to Card
            </button>
            <button
              type="button"
              class="w-full bg-[#313130] border-2 mt-2 text-white hover:bg-[#4f4f4f] rounded-full px-5 py-2.5 text-centre mr-2 mb-2 transition delay-50 duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
              Enquire now
            </button>
          </div>
          <div className="lease-info bg-[#36ff9a10]">
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faHandshake}
                  size="xl"
                  className="mr-4"
                />
              </span>
              <span className="basis-9/12">From 400€ a month with lease buy or installment.</span>
            </p>
            <a href>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};
