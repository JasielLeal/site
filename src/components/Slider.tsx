'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay, EffectCreative } from 'swiper/modules';
import Image from 'next/image';
import projeto1 from '../../public/projeto1.png'

export default function Slider() {

    const data = [
        { id: 1, src: projeto1 },
        { id: 2, src: projeto1 }
    ]

    return (
        <div>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },

                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper "
            >

                {data.map((projeto) => (
                    <SwiperSlide key={projeto.id} className=''>
                        <Image src={projeto.src} alt='projetos' width={300} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
