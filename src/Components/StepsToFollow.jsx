import React from 'react';
import "./css/StepToFollow.css";
import {Steps} from "../Module/General";
import { Step } from '@mui/material';

const StepsToFollow = () => {



  return (
    <div className='steps-container'>
      
      <div className='heading'>
        <h1>Steps To Follow?</h1>
      
        {Steps.map((data,idx)=>{
          return <p key={data.id}>{data.step}</p>
        })}
      </div>

    </div>
  )
}

export default StepsToFollow;