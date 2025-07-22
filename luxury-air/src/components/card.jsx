import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faOilCan } from "@fortawesome/free-solid-svg-icons"

import ImageCarousel from "./carosuel";

function Card({ title, text, images, size, seats, range, linkText, linkHref }) {
  const endpoint="http://localhost:4242/checkout-session"
  async function payment(totalPrice){
    try{
      const response = await fetch(endpoint,{
        method:"POST",
        body:JSON.stringify({
          amount:totalPrice,
        planeSize:"big one ",
        }),
        headers:{
          "Content-Type": "application/json",
          
        }
      });
      console.log("this is the res",response);
      const data = await response.json();
      console.log("data",data);
      window.location.href = data.url
    }catch(error){
      console.error("Error during payment:", error);
    }
    ;
  }
  return (
    <div className="w-[40rem] h-[45rem] p-2 m-auto bg-white/20 text-white shadow-md rounded-md overflow-hidden">
      <ImageCarousel images={images} showHover={false} />
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <div className="justify-center">
          <p className="p-3">{text}</p>
          <div className="flex justify-center">
            <p className="p-3">
              <FontAwesomeIcon
                icon={faPlane}
                size="sm"
                style={{ color: "#929496" }}/>{" "}
              {size}
            </p>
            <p className="p-3">
              <FontAwesomeIcon
                icon={faUser}
                size="sm"
                style={{ color: "#929496" }}/>{" "}
                {seats}
            </p>
            <p className="p-3">
              <FontAwesomeIcon
              icon={faOilCan}
              size="sm"
              style={{color: "#929496" }} />{" "}
              Range: {range}</p>
          </div>
        </div>
        <button
         onClick={()=> payment(100000)}
          href={linkHref}
          className="inline-block px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 hover:cursor-pointer transition delay-75 duration-200 ease-in-out">
            {/* mess with to make plane pop up on click maybe */}
          {linkText}
        </button>
      </div>
    </div>
  );
}

export default Card;
