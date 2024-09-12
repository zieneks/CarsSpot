
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 


const ImageSwiper = () => {
  return (
    
    <Swiper
    
    
      modules={[Navigation, Pagination, Autoplay]} 
      spaceBetween={50} 
      loop={true} 
      navigation={false} 
      pagination={{ clickable: true, el: '.swiper-pagination', }} 
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        
        320: {
          slidesPerView: 1, 
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2, 
          spaceBetween: 30,
        },
        
      }}
      
      className="mySwiper " 
    >
      <SwiperSlide>
        <img src="/images/car1.png" alt="car 1" className=" w-full h-full md:w-11/12  mb-24 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/car2.png" alt="car 2" className=" w-full h-full md:w-11/12  object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/car3.png" alt="car 3" className=" w-full h-full md:w-11/12  object-cover" />
        
      </SwiperSlide>
      

      <div className="swiper-pagination mt-8 justify-center  "></div>

      
    </Swiper>

    
  );
};

export default ImageSwiper;
