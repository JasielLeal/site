'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import projeto1 from '@/assets/baiaformosatour.png'
import Image from 'next/image';

export function PortifolioCarrosel() {
    
    const data = [
        { id: 1, src: projeto1 },
        { id: 2, src: projeto1 }
    ]
    
    return (
        <>
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {data.map((projeto) => (
                    <SwiperSlide key={projeto.id}>
                        <Image src={projeto.src} alt='projetos' className='rounded-md'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
