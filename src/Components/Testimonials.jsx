import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay,Navigation} from "swiper";
import StarIcon from '@mui/icons-material/Star';
import R from "./assets/R.png";
import L from "./assets/L.png";
import "./css/Testimonials.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Testimonial} from "../Module/General";




const Testimonials = () => {
  
  return (

    <div className='Testimonial-main'>

      <div className='Testimonial-header container'>
          <h1>Client Reviews</h1>
      </div>
    <div className='Testimonials-container section section-testimonial'>
    

    <div>

         <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={false}
          navigation ={true}
        breakpoints= {{
          960: {
            slidesPerView: 2,
          }
        }}
          modules={[Pagination,Autoplay,Navigation]}
          className="mySwiper container"
      >
        
            {/* Swiper Start */}


            {Testimonial.map(data=>{
              return (
                <SwiperSlide>
                      <div className='swiper-client-msg'>
                        <img className='left' src={L} alt="R" />
                        <p>{data.content}</p>
                        <img src={R} className="right" alt="L" />
                        <hr className='testimonial-hr'/>

                      <div className='client-data-details'>
                          <StarIcon style={{ color: "yellow" }}/>
                          <StarIcon style={{ color: "yellow" }}/>
                          <StarIcon style={{ color: "yellow" }}/>
                          <StarIcon style={{ color: "yellow" }}/>
                          <StarIcon style={{ color: "yellow" }}/>
                          <h5>{data.name}</h5>
                          <p>{data.date}</p>
                      </div>
                      </div>
                </SwiperSlide> 
              )
            })

            }      
           
      
      </Swiper> 
   
    </div>
    </div>
    </div>
  )
}

export default Testimonials;