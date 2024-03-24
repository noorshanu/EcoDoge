import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" py-1 ">
      <div className="container-wrapper relative">
        <div className=" flex items-center justify-between gap-2">
          <div className=" flex items-center gap-1">
            <img
              src="/images/logo.png"
              className="max-w-[6rem] w-full "
              alt=""
            />
        
          </div>

          <div className="flex items-center space-x-6">
            {/* <a
              href="https://t.me/dogegalaxys"
              target="_blank"
              className=" text-2xl text-[#ffb22e]"
            >
              <FaTelegram />
            </a> */}
            <a
              href="https://x.com/dogegalaxy_"
              target="_blank"
              className=" text-2xl text-[#000000]"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
