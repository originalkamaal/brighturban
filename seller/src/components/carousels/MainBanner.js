import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HashNavigation, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';

const MySwiper = () => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const { width, height,currentBP } = useWindowDimensions();
    console.log(width, height,currentBP);

    return (
        <Swiper
            className='relative w-full rounded-lg pt-4'
            modules={[Pagination, Navigation, HashNavigation]}
            navigation={{
                
            }}
            pagination={{ clickable: true, currentClass: "currentSlide" }}
            spaceBetween={20}
            slidesPerView={currentBP}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >



            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 1</div></SwiperSlide>
            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 2</div></SwiperSlide>
            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 3</div></SwiperSlide>
            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 4</div></SwiperSlide>
            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 5</div></SwiperSlide>
            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 6</div></SwiperSlide>
            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 7</div></SwiperSlide>
            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 8</div></SwiperSlide>
            <SwiperSlide><div className='w-full h-60 bg-blue-800 rounded-xl'>slide 9</div></SwiperSlide>
            <div ref={navigationPrevRef}>Previous</div>
            <div ref={navigationNextRef}>Next</div>

        </Swiper>
    )
}

const MainBanner = () => {
    return (
        <MySwiper />
    )
}

export default MainBanner