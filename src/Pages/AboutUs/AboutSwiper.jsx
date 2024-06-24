import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import img1 from './../../assets/shop-1.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './AboutSwiper.css'


// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { StoreContext } from '../../Context/Context';
const AboutSwiper = () => {

    const { allBranch } = useContext(StoreContext)

    console.log(allBranch)

    return (
        <>
            <Swiper
                spaceBetween={500}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                {allBranch.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="swiper-container">
                            <img src={item.src} className='swiper-img' />
                            <div className='swiper-branch'>
                            <span className='branch-name' >{item.branch}</span>
                            <span className='branch-address'>
                                {item.address}
                            </span>
                            </div>
                            
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}

export default AboutSwiper