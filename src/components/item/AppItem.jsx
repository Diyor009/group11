import {FaCookie, FaTrash, FaStar} from "react-icons/fa";
import "./AppItem.css"
import { useState } from 'react';
const AppItem = (props) => {
  const [promotion, setPromotion] = useState(false)
  const [start, setStar] = useState()

  const handlePromotion = () => {
    setPromotion(prevPromo => !prevPromo)
  }
  

  return (
    <li className='list-inner'>
      <span className={`list-name ${promotion ? "promotion" : ""}`} >{props.name}</span>
      <input type="text" className="list-input" defaultValue={props.salary}/>  
      <div className="btn-group">
        <button className='btn' onClick={handlePromotion}>
            <FaCookie/>
        </button>
        <button className='btn'>
            <FaTrash/>
        </button>
        {!start ? "" :  <FaStar/>}         
      </div>
    </li>
  )
}

export default AppItem