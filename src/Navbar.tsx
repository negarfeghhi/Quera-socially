import logo from "./assets/images/Home/Link.png";
import light from "./assets/svg/Icons.svg";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#E5E5E5] px-84 py-3 flex items-center justify-between">
      <img src={logo} />
      <div className="w-60 flex items-center gap-4 bg-amber-300">
        <button className="p-2 flex justify-center rounded-md items-center bg-white">
          <img src={light} />
        </button>
        <button className="bg-[#0A0A0A] py-2 px-4 text-white rounded-md ">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
