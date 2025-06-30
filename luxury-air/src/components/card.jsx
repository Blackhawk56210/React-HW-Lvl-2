import React, { useState, useEffect } from "react";
import ImageCarousel from "./carosuel";

function Card({ title, text, images, linkText, linkHref }) {
  return (
    <div className="w-3/4 p-2 m-auto bg-white/20 text-white shadow-md rounded-md overflow-hidden">
      <ImageCarousel images={images} showHover={true}/>
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="mb-4">{text}</p>
        <a
          href={linkHref}
          className="inline-block px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition">
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default Card;
