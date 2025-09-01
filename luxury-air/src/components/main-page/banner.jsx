import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-white.png";
import Video from "../../assets/video/promo.mp4";

function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative inline-block w-full">
      <video
        src={Video}
        autoPlay
        muted
        loop
        className={`rounded-xl block w-full ${isMobile ? "h-48 object-cover" : "h-auto"}`}
      />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
          isMobile ? "w-24" : "w-48"
        }`}
      >
        <img src={Logo} alt="Logo" className="w-full" />
      </div>
    </div>
  );
}

export default Banner;
