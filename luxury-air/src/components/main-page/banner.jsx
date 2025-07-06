import Logo from "../../assets/images/logo-white.png";
import Video from "../../assets/video/promo.mp4";

function Banner() {
  return (
    <>
      <div className="relative inline-block">
        <video src={Video} autoPlay muted loop className="rounded-xl block" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default Banner;
