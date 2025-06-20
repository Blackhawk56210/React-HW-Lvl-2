function Banner() {
    return (
        <>
        <div className="justify bg-center">
            <img src="./src/assets/images/logo.jpg" alt="Luxury Air Brand Logo" width="250"/>
        </div>
        <div>
            <video src="./src/assets/videos/promo.mp4" controls type="video/mp4" autoplay="true" loop="true" width="100%"/>
        </div>
        </>
    )
}
// finish autoplay on video banner
export default Banner