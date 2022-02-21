import React from "react";

import "./Downloads.scss";

export const Downloads = ({ productDownloads }) => {
  return (
    <div className="product-downloads">
      <div className="downloads-title">Downloads</div>

      {productDownloads.map((doc) => (
        <a href={doc.url} target="_blank" rel="noreferrer" className="downloads-section">
          <div className="doc-image overflow-hidden">
            <img src={doc.image} alt={doc.title} />
          </div>
          <div>
            <p className="doc-title">{doc.title}</p>
            <p className="doc-desc">{doc.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
