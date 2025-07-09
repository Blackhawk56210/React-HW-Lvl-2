import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="text-white border-b w-full bg-black h-20 sticky">
      <nav className="flex items-center justify-between px-6 h-full ">
        {/* Left Links */}
        <div className="flex gap-8">
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/inventory" className="hover:text-gray-300">
            Inventory
          </NavLink>
          <NavLink to="/support" className="hover:text-gray-300">
            Support
          </NavLink>
        </div>

        {/* Right Link */}
        <div>
            <a href="tel: +1 850 9-12345678" className="p-2">+1 (850) 9-CHRISAIR</a>
          <NavLink to="/inventory" className="hover:bg-gray-500 border text-black rounded-l p-2 bg-white">
            Book Charter
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
