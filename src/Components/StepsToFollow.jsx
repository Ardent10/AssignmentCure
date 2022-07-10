import React from 'react';
import "./css/StepToFollow.css";
import {Steps} from "../Module/General";

const StepsToFollow = () => {



  return (
    
    <div className='steps-container'>
      <div className='heading'>
        <h1>Steps To Follow?</h1>
      </div>

      <div className='circular'>
        <div class="containers">
              {Steps.map(data=>{
                return (

                <div class="cards">
                  <div class="box">
                    <div class="content">
                      <h2>{data.id}</h2>
                        <img src={data.icon} className='step-icon'/> 
                      <p>{data.step}</p>
                    </div>
                  </div>
                </div>
                )
              })}
        </div>
        


                            
                 


     </div> 

                
    </div>



  )
}

export default StepsToFollow;