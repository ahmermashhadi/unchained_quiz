import React from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-scroll";

import { Features } from "./Features/Features";
import { Specifications } from "./Specifications/Specifications";
import { Downloads } from "./Downloads/Downloads";
import { Videos } from "./Videos/Videos";
import { Discussion } from "./Discussion/Discussion";

import "react-awesome-slider/dist/styles.css";
import "./ProductPage.scss";
import { ProductInfo } from "./ProductInfo/ProductInfo";


export const ProductPage = ({ productInfo }) => {

  return (
    <div>
      <div className="product-fixed-header">
        <Breadcrumbs />
        <div className="scroll-header mt-8">
          <Link
            className="mr-4 font-bold	cursor-pointer"
            to="features"
            spy={true}
            smooth={true}
            offset={-300}
          >
            Features
          </Link>
          <Link
            className="mr-4 font-bold	cursor-pointer"
            to="specifications"
            spy={true}
            smooth={true}
            offset={-300}
          >
            Specifications
          </Link>
          <Link
            className="mr-4 font-bold	cursor-pointer"
            to="downloads"
            spy={true}
            smooth={true}
            offset={-300}
          >
            Downloads
          </Link>
          <Link
            className="mr-4 font-bold	cursor-pointer"
            to="videos"
            spy={true}
            smooth={true}
            offset={-300}
          >
            Videos
          </Link>
          <Link
            className="mr-4 font-bold	cursor-pointer"
            to="discussion"
            spy={true}
            smooth={true}
            offset={-300}
          >
            Discussion
          </Link>
        </div>
      </div>
      <section className="pt-60">
        <ProductInfo productInfo={productInfo} />
        <div id="features" style={{ height: 500 }}>
          <Features />
        </div>
        <div id="specifications" style={{ height: 500 }}>
          <Specifications />
        </div>
        <div id="downloads" style={{ height: 500 }}>
          <Downloads />
        </div>
        <div id="videos" style={{ height: 500 }}>
          <Videos />
        </div>
        <div id="discussion" style={{ height: 500 }}>
          <Discussion />
        </div>
      </section>
    </div>
  );
};
