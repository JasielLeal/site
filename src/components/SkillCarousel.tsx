import React from 'react';
import Marquee from "react-fast-marquee";

export function SkillCarousel() {
    return (
        <Marquee direction="left" speed={20} autoFill>
            <div className='flex w-full py-10'>

                <div className='w-full  border-2 font-semibold text-base py-1 px-3 rounded-md mr-8'>
                    <p>Html5</p>
                </div>
                <div className='w-full border-2 text-base py-1 px-3 rounded-md mr-8'>
                    <p>Css3</p>
                </div>
                <div className='w-full border-2 text-base py-1 px-3 rounded-md mr-8'>
                    <p>JavaScript</p>
                </div>
                <div className='w-full border-2 text-base py-1 px-3 rounded-md mr-8'>
                    <p>TypeScript</p>
                </div>
                <div className='w-full border-2 text-base py-1 px-3 rounded-md mr-8'>
                    <p>ReactJS</p>
                </div>
                <div className='w-full border-2 text-base py-1 px-3 rounded-md mr-8'>
                    <p>NextJS</p>
                </div>
                <div className='w-full border-2 text-base py-1 px-3 rounded-md mr-8'>
                    <p>NodeJS</p>
                </div>
                <div className='w-full border-2 text-base py-1 px-3 rounded-md mr-8'>
                    <p>Docker</p>
                </div>
                <div className='w-full border-2 text-base py-1 px-3 rounded-md mr-8'>
                    <p>Express</p>
                </div>
            </div>
            {/* Adicione mais itens aqui, conforme necessário (Lembrar que o utlimo tem que ter mr-10)*/}
        </Marquee>
    );
}