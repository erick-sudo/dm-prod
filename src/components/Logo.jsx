import React from "react";
import { images } from "../assets/images/images";

function Logo({ sz = 12, image = images.logo_tp2 }) {
  return (
    <div className="" style={{ height: `${sz}px`, width: `${sz}px` }}>
      <img className="w-full h-full object-cover" src={image} />
    </div>
  );
}

export default Logo;
