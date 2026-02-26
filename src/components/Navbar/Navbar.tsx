import logo from "./../../assets/images/Link.png";
import light from "./../../assets/svg/sun.svg";
import home from "./../../assets/svg/house.svg";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#E5E5E5] px-52 py-3 flex items-center justify-between">
      <img src={logo} />
      <div className="w-60 flex items-center gap-4">
        <button className="p-2 flex justify-center rounded-md items-center bg-white border border-[#E5E5E5] shadow cursor-pointer">
          <img src={light} />
        </button>
        <button className="p-2 flex justify-center gap-2 rounded-md items-center bg-white cursor-pointer">
          <img src={home} />
          Home
        </button>
        <button className="bg-[#0A0A0A] py-2 px-4 text-white text-nowrap rounded-md cursor-pointer">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
