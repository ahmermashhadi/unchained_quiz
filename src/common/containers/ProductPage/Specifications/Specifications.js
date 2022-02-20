import React from "react";

import "./Specifications.scss";

export const Specifications = ({ productSpecs }) => {
  return (
    <div className="product-specifications">
      <h1 className="specifications-title">Specifications</h1>
      <section className="specifications-table">
        {productSpecs.map((spec) => (
          <div key={spec.title} className="spec-table-col">
            <div className="w-1/3">{spec.title}</div>
            <div className="w-1/3">{spec.value}</div>
          </div>
        ))}
      </section>
    </div>
  );
};
