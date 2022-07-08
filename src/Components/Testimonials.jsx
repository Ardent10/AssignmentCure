import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay,Navigation} from "swiper";
import "./css/Testimonials.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Testimonials = () => {
  
  const img = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  return (
    <div className='Testimonials-container section section-testimonial'>
    
  
      <div className='Testimonial-header container'>
          <h1 className='common-heading'>Happy Client's</h1>
      </div>

    <div>

         <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay ={{
            delay: 2000,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation ={true}
        breakpoints= {{
          960: {
            slidesPerView: 2,
          }
        }}
          modules={[Pagination,Autoplay,Navigation]}
          className="mySwiper container"
      >
        
            {/* Swiper Start */}
        <SwiperSlide>
              <div className='swiper-client-msg'>
                <p>I searched every possible assignment solution website 
                  untill I came to know Assignment Cure. At Assignment Cure 
                  the name speaks in itself and I am amazed by the quality
                  it provides. My teachers were impressed. All thanks to
                  Assignment Cure. 
                </p>
              </div>
              <div className='swiper-client-data grid grid-two-coloumn'>
                <figure>
                    <img src={img} alt="client" />
                </figure>
              <div className='client-data-details'>
                  <h5>Kevin Philips</h5>
                  <p>Entrepreneur</p>
              </div>
              </div>
        </SwiperSlide>
            {/* swiper end */}
           
            {/* Swiper Start */}
        <SwiperSlide>
        <div className='swiper-client-msg'>
                <p>I searched every possible assignment solution website 
                  untill I came to know Assignment Cure. At Assignment Cure 
                  the name speaks in itself and I am amazed by the quality
                  it provides. My teachers were impressed. All thanks to
                  Assignment Cure. 
                </p>
              </div>
              <div className='swiper-client-data grid grid-two-coloumn'>
                <figure>
                    <img src={img} alt="client" />
                </figure>
              <div className='client-data-details'>
              <h5>Kevin Philips</h5>
                  <p>Entrepreneur</p>
              </div>
              </div>
        </SwiperSlide>
            {/* swiper end */}
           
            {/* Swiper Start */}
        <SwiperSlide>
        <div className='swiper-client-msg'>
                <p>I searched every possible assignment solution website 
                  untill I came to know Assignment Cure. At Assignment Cure 
                  the name speaks in itself and I am amazed by the quality
                  it provides. My teachers were impressed. All thanks to
                  Assignment Cure. 
                </p>
              </div>
              <div className='swiper-client-data grid grid-two-coloumn'>
                <figure>
                    <img src={img} alt="client" />
                </figure>
              <div className='client-data-details'>
              <h5>Kevin Philips</h5>
                  <p>Entrepreneur</p>
              </div>
              </div>
        </SwiperSlide>
            {/* swiper end */}
           
            {/* Swiper Start */}
        <SwiperSlide>
        <div className='swiper-client-msg'>
                <p>I searched every possible assignment solution website 
                  untill I came to know Assignment Cure. At Assignment Cure 
                  the name speaks in itself and I am amazed by the quality
                  it provides. My teachers were impressed. All thanks to
                  Assignment Cure. 
                </p>
              </div>
              <div className='swiper-client-data grid grid-two-coloumn'>
                <figure>
                    <img src={img} alt="client" />
                </figure>
              <div className='client-data-details'>
              <h5>Kevin Philips</h5>
                  <p>Entrepreneur</p>
              </div>
              </div>
        </SwiperSlide>
            {/* swiper end */}
            
            {/* Swiper Start */}
        <SwiperSlide>
        <div className='swiper-client-msg'>
                <p>I searched every possible assignment solution website 
                  untill I came to know Assignment Cure. At Assignment Cure 
                  the name speaks in itself and I am amazed by the quality
                  it provides. My teachers were impressed. All thanks to
                  Assignment Cure. 
                </p>
              </div>
              <div className='swiper-client-data grid grid-two-coloumn'>
                <figure>
                    <img src={img} alt="client" />
                </figure>
              <div className='client-data-details'>
              <h5>Kevin Philips</h5>
                  <p>Entrepreneur</p>
              </div>
              </div>
        </SwiperSlide>
            {/* swiper end */}
            
            {/* Swiper Start */}
        <SwiperSlide>
        <div className='swiper-client-msg'>
                <p>I searched every possible assignment solution website 
                  untill I came to know Assignment Cure. At Assignment Cure 
                  the name speaks in itself and I am amazed by the quality
                  it provides. My teachers were impressed. All thanks to
                  Assignment Cure. 
                </p>
              </div>
              <div className='swiper-client-data grid grid-two-coloumn'>
                <figure>
                    <img src={img} alt="client" />
                </figure>
              <div className='client-data-details'>
              <h5>Kevin Philips</h5>
                  <p>Entrepreneur</p>
              </div>
              </div>
        </SwiperSlide>
            {/* swiper end */}
            
            {/* Swiper Start */}
        <SwiperSlide>
            <div className='swiper-client-msg'>
                <p>I searched every possible assignment solution website 
                  untill I came to know Assignment Cure. At Assignment Cure 
                  the name speaks in itself and I am amazed by the quality
                  it provides. My teachers were impressed. All thanks to
                  Assignment Cure. 
                </p>
              </div>
              <div className='swiper-client-data grid grid-two-coloumn'>
                <figure>
                    <img src={img} alt="client" />
                </figure>
              <div className='client-data-details'>
              <h5>Kevin Philips</h5>
                  <p>Entrepreneur</p>
              </div>
              </div>
        </SwiperSlide>
            {/* swiper end */}
           
      
      </Swiper> 
   
    </div>
    </div>
  )
}

export default Testimonials;