import { FaDiscourse } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { CiWallet } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

import simg from "../images/sidebarimage.png";

const Sidebar = ({ isNavopen }) => {
  return (
    <div
      className={`container ${
        isNavopen ? "container-open" : "container-closed"
      }`}
    >
      <div className="navbar">
        <FaDiscourse className="header" />
        <span>
          <h3>Skilify Admin</h3>
        </span>
      </div>

      <div className="navbar">
        <AiOutlineHome />
        <span>Dashboard</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="navbar">
        <FaRegCirclePlay />
        <span>My Course</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="navbar">
        <CiCalendar />
        <span>calendar</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="navbar">
        <IoBookOutline />
        <span>Resource</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="navbar">
        <MdOutlineQuiz />
        <span>Quiz</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="navbar">
        <FiMessageSquare />
        <span>Message</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="navbar">
        <HiOutlineTrendingUp />
        <span>My Status</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="navbar">
        <CiWallet />
        <span>wallet</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="navbar">
        <VscAccount />
        <span>My Account</span>
        <HiChevronRight className="arrow" />
      </div>

      <div className="sidebarimg">
        <img className="simage" src={simg} alt="sbar" />
        <button>Get Subscription</button>
      </div>
      <p>Skilify Teacher Dashboard Admin</p>
      <p>@2020 All right reserved</p>
    </div>
  );
};

export default Sidebar;
