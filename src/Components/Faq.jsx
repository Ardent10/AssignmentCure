import React,{useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {frequentlyaskedquestions} from "../Module/General.js";
import "./css/faq.css";


const Panel = (props) => {
  const [height,setHeight] = useState(0);
  
  useEffect(()=>{

    window.setTimeout(() => {
      const height = document.querySelector(".panel__inner").scrollHeight;
      setHeight(height);
    }, 333);
  
  })

  const {Question,Answer,activeTab, index, activateTab} = props;
  const isActive = activeTab === index;

  
    
    const innerStyle = {
      height: `${isActive ? height : 0}px`
    };

    return (
      <div className="panel" role="tabpanel" aria-expanded={isActive}>
        <button className="panel__label" role="tab" onClick={activateTab}>
          {Question}
        </button>
        <div
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className="panel__content">{Answer}</p>
        </div>
      </div>
    );

}

const Accordion = ({panels}) =>  {
  const [activeTab,setactiveTab] = useState(-1);
  
  const activateTab = (index) =>{
    // console.log(index);
    setactiveTab(activeTab === index ? -1 : index);
  }
  
  // activateTab = activateTab.bind();

    return (
      <div className="accordion" role="tablist">
        {panels.map((panel, index) => (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={activateTab.bind(null, index)}
          />
        ))} 
      </div>
    );
  
}


const Faq = () => {

  // const [data,setData] = useState(frequentlyaskedquestions);
  

  return (
    <div className='faq-container'>
      <Row className="sf">
      <div className='faq-block-1'>
        <h1>Frequently Asked Question's</h1>
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

        {frequentlyaskedquestions.map((data,idx) => (
          <Col className="" sm={12} lg={6} md={6}>
              <Accordion panels={data} key={idx}/>
          </Col>
        ))}
      </Row>


    </div>
   )
}

export default Faq;