import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {frequentlyaskedquestions} from "../Module/General.js";
import "./css/faq.css";
import arrow from "./assets/arrow.png"

const Faq = () => {

  // const [data,setData] = useState(frequentlyaskedquestions);
  

  return (
    <div className='faq-container'>
      <div className='faq-block-1'>
        <h1>FAQ's</h1>
        <h4>Have Any Questions?</h4>
        
        <div className='search-container'>
        <input 
            className='input'
            type="text"
            placeholder='Search Any Question'
         />
         <SearchIcon className='search-icon'/>
        </div>
      </div>

      <div className='faq-block-2'>

        {frequentlyaskedquestions.map((data,idx) =>{
          return (
            <div className='faq-content'>
              <hr className='faq-hr'/>
              <div className='faq'>
                <h3>{data.Question}</h3>
                <p>{data.Answer}</p>
              </div>
            </div>             
          
          )
        })}
      </div>

       <span className='arrow'>
        <img src={arrow} alt="arrow" />
       </span> 

    </div>
   )
}

export default Faq;