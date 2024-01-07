import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import { SlGraph } from "react-icons/sl";
import simg from "../images/sidebarimage.png";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const percentage = 70;
const color = 'rgb(231, 64, 13)';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Section3 = () => {
  return (
    <div className='section3'>
    <div className='sale'>
    <div>
      <CircularProgressbar
       value={percentage}
        text={3500}
       strokeWidth={10}
       styles={buildStyles({
        pathColor: color,
        trailColor: 'blueviolet', // Set the trail color to transparent for a solid color fill
      })}

      />
    </div>
    <div className='s'>
     <span>
      cureent Week
     </span>
     <span>
      2000
     </span>
     <span>
      +0.3%
     </span>
    </div>

    <div  className='s'>
       <span>
      last Week
     </span>
     <span>
      1500
     </span>
     <b style={{fontSize: '18px',color:'blueviolet'}}><span className='graph2'> <SlGraph /> +0.3%</span> </b> 
    </div>

    </div>


    <div className='salestats'>
    <div>
    <ResponsiveContainer width={400} height={200}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div>
     <span>
     <img className="himg" src={simg} alt="hero"/>
     </span>
     <span>
      Adobe XD Part 01
     </span>
     <span>
      $20
     </span>
    </div>

    <div>
    <span>
    <img className="himg" src={simg} alt="hero"/>
     </span>
     <span>
      Adobe XD Part 01
     </span>
     <span>
      $20
     </span>
    </div>

   
    <div>
    <span>
    <img className="himg" src={simg} alt="hero"/>
     </span>
     <span>
      Adobe XD Part 01
     </span>
     <span>
      $20
     </span>
    </div>


    </div>


    <div className='studentQueries'>
      <div>
      <img className="himg" src={simg} alt="hero"/>
      <span>Machine learning</span>
      <div id="viewbox">view</div>
      <div id="Decline">Decline</div>
      </div>

      <div>
      <img className="himg" src={simg} alt="hero"/>
      <span>Machine learning</span>
      <div id="Approved">Approved</div>
      <div id="Decline">Decline</div>
      </div>

      <div>
      <img className="himg" src={simg} alt="hero"/>
      <span>Machine learning</span>
      <div id="Approved">Approved</div>
      <div id="Decline">Decline</div>
      </div>

      <div>
      <img className="himg" src={simg} alt="hero"/>
      <span>Analyst Bootcamp 2020</span>
      <div id="Approved">Approved</div>
      <div id="Decline">Decline</div>
      </div>

    </div>

    </div>
  )
}

export default Section3