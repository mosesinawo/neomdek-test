 
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

function Header() {
  return (
    <header className="mb-5 flex justify-between items-center">
      <div className="w-72 border-[3px] border-stone-300 rounded-md relative overflow-hidden">
        <FaMagnifyingGlass size={20} className="absolute left-2 top-2" />
        <input type="text" className="h-8 w-full pl-10" placeholder="Search" />
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <FaBell color="black" size={20} />
          <p className="text-base text-stone-500 cursor-pointer">Notifications</p>
        </div>
        <div className="flex items-center gap-2">
          <FiSettings color="black" size={20}/>
          <p className="text-base text-stone-500 cursor-pointer">Tools</p>
        </div>
        <div className="flex items-center gap-2">
          <BsFillQuestionCircleFill color="black" size={20} />
          <p className="text-base text-stone-500 cursor-pointer">Help</p>
        </div>

        <img src="/logo.png" alt="" className="h-12 w-32" />
      </div>
    </header>
  );
}

export default Header;
