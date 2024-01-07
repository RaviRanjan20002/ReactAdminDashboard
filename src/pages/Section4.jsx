import React from 'react'
import simg from "../images/sidebarimage.png";
const Section4 = () => {
  return (
    <div>
    
    <div className='s4header'>
    <div>Course Status</div>
        <div className='s4list'>
          
            <li>Course visit </li>
            <li>Course sale </li>
            <li>This Month </li>
        </div>
    </div>
    <div className='section4'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Home</th>
      <th scope="col"></th>
      <th scope="col">Category</th>
      <th scope="col">sale</th>
      <th scope="col">Rating</th>
      <th scope="col">Earning</th>
      <th scope="col">visitor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img className="himg" src={simg} alt="hero"/></td>
      <td>complete python bootcamp</td>
      <td>design</td>
      <td>150</td>
      <td>4.5</td>
      <td>$610</td>
      <td>24512</td>
    </tr>
    <tr>
      <td><img className="himg" src={simg} alt="hero"/></td>
      <td>complete python bootcamp</td>
      <td>design</td>
      <td>150</td>
      <td>4.5</td>
      <td>$610</td>
      <td>24512</td>
    </tr>
    <tr>
      <td><img className="himg" src={simg} alt="hero"/></td>
      <td>complete python bootcamp</td>
      <td>design</td>
      <td>150</td>
      <td>4.5</td>
      <td>$610</td>
      <td>24512</td>
    </tr>
    <tr>
      <td><img className="himg" src={simg} alt="hero"/></td>
      <td>complete python bootcamp</td>
      <td>design</td>
      <td>150</td>
      <td>4.5</td>
      <td>$610</td>
      <td>24512</td>
    </tr>
    <tr>
      <td><img className="himg" src={simg} alt="hero"/></td>
      <td>complete python bootcamp</td>
      <td>design</td>
      <td>150</td>
      <td>4.5</td>
      <td>$610</td>
      <td>24512</td>
    </tr>
    <tr>
      <td><img className="himg" src={simg} alt="hero"/></td>
      <td>complete python bootcamp</td>
      <td>design</td>
      <td>150</td>
      <td>4.5</td>
      <td>$610</td>
      <td>24512</td>
    </tr>

  </tbody>
</table>
    </div>
    </div>
  )
}

export default Section4