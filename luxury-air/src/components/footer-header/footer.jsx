import Logo from "../../assets/images/logo-white.png";

function Footer() {
  return (
    <div className="text-white p-10">
      <section className="flex justify-center">
        <div className="w-100">
          <img src={Logo} />
        </div>
        <div className="flex">
          <div className="mr-5">
            <div className="opacity-75 pb-5">Call</div>
            <div className="body-caps">
              <a href="tel:+1850912345678">+1 (850) 9-CHRISAIR</a>
            </div>
          </div>
          <div className="border-1 w-0 h-40 opacity-85"></div>
          <div className="m-3">
            <p className="opacity-75 pb-5">E-Mail</p>
            <div className="body-caps ml-2">
              <ul>
                <li>
                  <div>
                    <div className="label opacity-75 mb-1">
                      General Inquiries
                    </div>
                    <div className="body-bold mb-2">
                      <a href="mailto:ChrisAir@chrisair.com">ChrisAir@chrisair.com</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="opacity-75 label mb-1">
                      Marketing & Collaborations
                    </div>
                    <div className="body-bold">
                      <a href="mailto:ChrisAir@apple.com">ChrisAir@apple.com</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-1 w-0 h-40 opacity-85"></div>
          <div>
            <p className="opacity-75 pb-5">Socials</p>
            <div className="flex flex-row pl-4">
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.prod.website-files.com/661ecef2c676ea9e27b05705/6761b8127be8a1dfe57738b5_tiktok.svg"
                  loading="lazy"
                  className="invert w-4 mr-2"
                />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.prod.website-files.com/661ecef2c676ea9e27b05705/6761b82934c945ef8749d427_linkedin-in.svg"
                  loading="lazy"
                  className="invert w-4 mr-2"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.prod.website-files.com/661ecef2c676ea9e27b05705/6761b83b63af49d9e80726ae_instagram.svg"
                  loading="lazy"
                  className="invert w-4 mr-2"
                />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.prod.website-files.com/661ecef2c676ea9e27b05705/6761b86d767a974557d32270_x-twitter-brands-solid.svg"
                  loading="lazy"
                  className="invert w-5 mr-2"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white text-xs p-5">
        <p>
          © 2025 ChrisAir©. All rights reserved. ChrisAir© and its logo are
          trademarks or registered trademarks of ChrisAir Aviation LLC.
          Unauthorized use is strictly prohibited. Privacy Policy Your privacy
          matters to us. We are committed to protecting your personal
          information in accordance with applicable laws. View our full Privacy
          Policy for details on how we collect, use, and safeguard your data.
          Terms & Conditions Use of this website is subject to our Terms &
          Conditions. By continuing to browse or interact with this site, you
          agree to be bound by these terms. Cookie Policy This site uses cookies
          to improve user experience and analyze site traffic. By using our
          site, you consent to our use of cookies as described in our Cookie
          Policy. Flight Disclaimer All aircraft availability is subject to
          change. ChrisAir© acts as an agent on behalf of aircraft operators and
          does not own or operate aircraft directly. All flights are operated by
          properly licensed carriers. Accessibility Statement ChrisAir© is
          committed to providing a website that is accessible to the widest
          possible audience. If you experience any difficulty accessing any part
          of this site, please contact us at info@chrisair.com. Do Not Sell My
          Personal Information (For California Residents – CCPA) You have the
          right to opt-out of the sale of your personal information. Learn more
          about your rights <a href="legal stuff ">here</a>.
        </p>
        <div className="inline-block p-3 w-full">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/661ecef2c676ea9e27b05705/66241a17c99be7ddc820a229_apple.avif" 
            loading="lazy"
            className="inline-block h-15 p-2"/>
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/661ecef2c676ea9e27b05705/66241a17885ec39e1d213810_google.avif" 
            loading="lazy"
            className="inline-block h-15 p-2"/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
