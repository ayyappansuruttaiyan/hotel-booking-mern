import React from "react";
import "./featured.css";
function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_ipwGuR5qXU3_9sHz4xDrItG5ikf-Pm0YQ&s"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Reno</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;