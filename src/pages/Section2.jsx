import React from 'react'
import {AreaChart,BarChart,Area,Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { GoCircle } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";
const data = [
    {
      name: 'Jan',
      uv:0,
      pv:19,
      amt:0,
    },
    {
      name: 'Feb',
      uv: 19,
      pv: 27,
      amt:10,
    },
    {
      name: 'March',
      uv: 27,
      pv: 38,
      amt: 20,
    },
    {
      name: 'Apr',
      uv: 35,
      pv: 45,
      amt: 30,
    },
    {
      name: 'May',
      uv: 45,
      pv: 45,
      amt:40,
    },
    {
      name: 'Jun',
      uv: 55,
      pv: 60,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 58,
      pv: 68,
      amt: 70,
    },
    {
        name: 'Aug',
        uv: 80,
        pv: 45,
        amt: 70,
      },
      {
        name: 'sep',
        uv: 60,
        pv: 70,
        amt: 80,
      },
      {
        name: 'oct',
        uv:70 ,
        pv:60,
        amt:50,
      },
      {
        name: 'Nov',
        uv: 20,
        pv: 30,
        amt: 80,
      },
      {
        name: 'Dec',
        uv: 80,
        pv: 30,
        amt: 80,
      },
  ];


  const data2 = [
    {
      name: 'Mon',
      pv: 80,
      amt:0,
    },
    {
      name: 'Tue',
      pv: 20,
      amt: 10,
    },
    {
      name: 'Wed',
     
      pv: 30,
      amt: 20,
    },
    {
      name: 'Thur',
      
      pv: 40,
      amt: 30,
    },
    {
      name: 'Fri',
      
      pv: 50,
      amt: 40,
    },
    {
      name: 'Sat',
      
      pv: 40,
      amt:50,
    },
    {
      name: 'Sun',
      
      pv: 60,
      amt: 60,
    },
  ];
 
const Section2 = () => {
  return (
    <div className='chart'> 
    <div classname="line2">
    <div className='s2header'>
    <div> <b style={{fontSize: '18px',color:'blueviolet'}}>Revenue</b><span className='graph2'> <SlGraph /> +0.3%</span> </div>
    <div className='s2list'> 
      <li>Course visit <GoCircle  style={{ fontSize: '10px', backgroundColor: 'blueviolet', borderRadius: '50%' }}/></li> 
     <li>Course sale<GoCircle  style={{ fontSize: '10px', backgroundColor: 'orange', borderRadius: '50%' }}/> </li> 
     <li>This Month <MdArrowDropDown style={{ fontSize: '15px' }} /></li>
    </div>
    </div>
    <ResponsiveContainer width={700} height={300}>
  <AreaChart width={600} height={300} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="blueviolet" stopOpacity={0.2}/>
      <stop offset="95%" stopColor="bluviolet" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="blueviolet" stopOpacity={0.2}/>
      <stop offset="95%" stopColor="bluviolet" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="Red"  strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="blueviolet" strokeWidth={2}  fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>
    </div>

    <div className='bar'>
    <div className='s2header'>
    <div><b style={{fontSize: '18px',color:'blueviolet'}}> visitor </b><span className='graph22'> <SlGraph/>-0.3%</span></div>
    <div className='s2list'> 
      <BsThreeDotsVertical className='dot'/> 
    </div>
    </div>
    <ResponsiveContainer width={300} height={330}>
    <BarChart width={200} height={350} data={data2}>
  <CartesianGrid strokeDasharray="3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill=" blueviolet" barSize={8}  />

</BarChart>
      </ResponsiveContainer>
    </div>
 
    </div>
  )
}

export default Section2;