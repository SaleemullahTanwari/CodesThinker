import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';

export default function Page1() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
     
      modules={[Autoplay]}
      className="w-full h-[600px]"
    >
      <SwiperSlide >
        <div className="flex  flex-col   gap-9  h-full  w-full items-center justify-center text-3xl text-center ext-amber-50 "
         style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url(https://codesthinker.vercel.app/assets/header1-BIXukauP.webp)`, 
          backgroundPosition:"center", 
          backgroundRepeat:"no-repeat",
           backgroundSize:"cover"}}>
           <h1 className='text-[4rem] font-semibold'>Welcome To<span className='text-amber-500'> Codes Thinker</span></h1>
          <p className='text-3xl font-normal'>We craft smart, user friendly digital solutions that <br /> help business Innovate and grow</p>
          <div className='flex gap-6'> 
            <button className='border-2 text-[16px] px-4 py-3 rounded-4xl bg-[#0303ac] text-[20px] font-semibold'>View Our Work</button>
            <button className='border-2 text-[16px] px-4 py-3 rounded-4xl text-[20px] font-semibold'>Contact Us</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex  flex-col h-full w-full gap-9 items-center justify-center  text-3xl text-center  ext-amber-50"
        style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://codesthinker.vercel.app/assets/header1-BIXukauP.webp)`,
         backgroundPosition:"center", 
         backgroundRepeat:"no-repeat", 
         backgroundSize:"cover",
         opacity:"4px"}}>
            <h1 className='text-[4rem] font-semibold '>Transform Ideas Into<span className='text-amber-500'>  Digital Reality</span></h1>
          <p className='text-2xl font-medium'>Our team blends creative design and clean to <br /> deliver impactful digital experiences.</p>
          <div className='flex gap-6'> 
            <button className='border-2 text-[16px] px-4 py-3 rounded-4xl bg-[#0303ac] text-[20px] font-semibold'>View Our Work</button>
            <button className='border-2 text-[16px] px-4 py-3 rounded-4xl text-[20px] font-semibold'>Contact Us</button>
          </div>
          
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex  flex-col  gap-9  h-full w-full items-center justify-center text-3xl text-center text-amber-50"
         style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://codesthinker.vercel.app/assets/header1-BIXukauP.webp)`,
         backgroundPosition:"center", 
         backgroundRepeat:"no-repeat", 
         backgroundSize:"cover"}}>
          <h1 className='text-[4rem] font-semibold '>Your Vision,<span className='text-amber-500'>   Our Expertise </span></h1>
          <p className='text-2xl font-medium'>Partner with us to build scalable, modern <br /> websites  that bring your vision to life.</p>

          <div className='flex gap-6'> 
            <button className='border-2 text-[16px] px-4 py-3 rounded-4xl bg-[#0303ac] text-[20px] font-semibold'>View Our Work</button>
            <button className='border-2 text-[16px] px-4 py-3 rounded-4xl text-[20px] font-semibold'>Contact Us</button>
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
  );
}
