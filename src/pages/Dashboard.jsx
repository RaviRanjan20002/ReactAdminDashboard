import React, { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { LuBellDot } from "react-icons/lu";
import { AiTwotoneMessage } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { BsUpload } from "react-icons/bs";
import simg from "../images/sidebarimage.png";

import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Dashboard = () => {
  const [isNavopen, setisNavopen] = useState(false);

  return (
    <div className="pagecontainer">
      <div>
        <Sidebar isNavopen={isNavopen} />
      </div>

      {/* <div className="dcontainer"> */}
      <div
        className={`dcontainer ${
          isNavopen ? "dcontainer-open" : "dcontainer-closed"
        }`}
      >
        <div className="home">
          <div className="leftheader">
            <HiBars3CenterLeft onClick={() => setisNavopen(!isNavopen)} />
            <span> Hello mad ✋</span>
          </div>

          <div className="search">
            <CiSearch className="searchicon" />
            <input type="search" placeholder="search here" />
          </div>

          <div className="rightheader">
            <button className="bt">
              <input type="file" id="upload" hidden />
              <label for="upload">
                <BsUpload /> New Upload
              </label>
            </button>
            <button className="bt">
              <LuBellDot />
            </button>
            <button className="bt">
              <AiTwotoneMessage />
            </button>
            <button className="bt">
              <SlGraph />
            </button>
            <div className="btt">
              <div className="maddesigner">
                <h6>TheMad</h6>
                <p>Designer</p>
              </div>
              <img className="himg" src={simg} alt="hero" />
            </div>
          </div>
        </div>
        <div>
          <Section1/>
        </div>
        <div>
          <Section2/>
        </div>
        <div>
          <Section3/>
        </div>
        <div>
          <Section4/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
