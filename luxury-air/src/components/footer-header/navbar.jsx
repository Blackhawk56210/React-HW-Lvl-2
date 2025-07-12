import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-white.png";

function NavBar() {
  return (
    <div className="text-white border-b w-full bg-black h-20 sticky">
      <nav className="flex items-center justify-between h-full">
        <img src={Logo} alt="Logo" className="h-30"/>
        {/* Left Links */}
        <div className="flex gap-8 text-xl">
          <NavLink to="/" className="hover:text-blue-300">
            Home
          </NavLink>
          <NavLink to="/inventory" className="hover:text-blue-300">
            Inventory
          </NavLink>
          <NavLink to="/support" className="hover:text-blue-300">
            Support
          </NavLink>
        </div>

        {/* Right Link */}
        <div className="px-5">
            <a href="tel: +1 850 9-12345678" className="px-5">+1 (850) 9-CHRISAIR</a>
          <NavLink to="/inventory" className="hover:bg-blue-300 border text-black rounded-br-xl rounded-tl-xl p-2 bg-white">
            Book Charter
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
