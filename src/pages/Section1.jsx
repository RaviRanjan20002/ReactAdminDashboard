import React from 'react'
import graph from "../images/graph.png"
import line from "../images/line.png"

const Section1 = () => {
  return (
    <div className='sectioncontainer'>
        <div className='sbox'>
         <img className="line" src={line} alt="line"/>
         <h6> Impressions
         <li>832</li></h6>
         <img className="graph" src={graph} alt="graph"/>
        </div>

        <div className='sbox'>
        <img className="line" src={line} alt="line"/>
         <h6> Total audience 
         <li>832</li></h6>
         <img className="graph" src={graph} alt="graph"/>
        </div>

        <div className='sbox'>
        <img className="line" src={line} alt="line"/>
         <h6>Engagements
         <li>832</li></h6>
         <img className="graph" src={graph} alt="graph"/>
        </div>

        <div className='sbox'>
        <img className="line" src={line} alt="line"/>
         <h6>Engaged audience
         <li>832</li>
         </h6>
         <img className="graph" src={graph} alt="graph"/>
        </div>
    </div>
  )
}

export default Section1;