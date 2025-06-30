import Logo from '../assets/images/logo-white.png';
import Video from '../assets/video/promo.mp4'

function Banner() {
    return (
      <>
        <div className="flex items-center justify-center">
          <video src={Video} autoPlay muted loop className="rounded-xl"/>
          <div className="w-300 m-auto z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <img src={Logo} />
          </div>
        </div>
      </>
    )
}

 export default Banner