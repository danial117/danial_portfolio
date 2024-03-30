import React from "react";

const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <g transform="translate(0.000001 0.000001)">
        <ellipse
          rx="37.344646"
          ry="35.961512"
          transform="translate(164.16264 184.584905)"
          fill="#6b21a8"
          strokeWidth="0"
        />
        <ellipse
          rx="35.961512"
          ry="33.19524"
          transform="matrix(.846155 0 0 0.875 164.16264 184.584905)"
          fill="#fff"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
};

export default Circle;