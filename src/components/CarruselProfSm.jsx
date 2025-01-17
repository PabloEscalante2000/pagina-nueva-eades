import {psicologos as dataProfesional} from '../data/psicologos';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CarruselProfSm() {

    const [isStart,setIsStart] = useState(true);
    const [isEnd,setIsEnd] = useState(false);

  return (
    <>
        <div className="w-full mt-10 relative sm:hidden block">
        <Swiper
            modules={[Navigation,Pagination,EffectFade]}
            effect='fade'
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
                clickable:true,
            }}
            fadeEffect={{
                crossFade:true
            }}
            speed={800}
            navigation={{
            nextEl:".custom-next",
            prevEl:".custom-prev"
            }}
            onSlideChange={(swiper) => {
            setIsStart(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
            }}
            onInit={(swiper) => {
            setIsStart(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
            }}
        >
            <div className="absolute flex gap-2 top-5 left-12">
            <button className={`custom-prev text-lg w-10 aspect-square bg-azul text-marroncito ${isStart ? "opacity-50":""} text-md flex justify-center items-center rounded-lg  hover:scale-95 transition-all cursor-pointer -translate-y-1/2 top-1/2 left-0 z-50 visible`} aria-label='Profesional previo'>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <button aria-label='Siguiente Profesional' className={`custom-next text-lg w-10 aspect-square bg-azul text-marroncito ${isEnd ? "opacity-50":""} text-md flex justify-center items-center rounded-lg hover:scale-95 transition-all cursor-pointer -translate-y-1/2 top-1/2 right-0 z-50 visible`}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </button>
            </div>
            {dataProfesional.map((val,index) => (
            <SwiperSlide key={index}>
            <div  className="w-[90%] mx-auto bg-white text-azul border-2 border-celeste rounded-[40px] bg-opacity-60 m-auto py-5 px-2 mb-[50px] mt-[50px]">
                <img src={val.img_url} alt={val.nombre} className="object-cover w-[90%] rounded-lg m-auto aspect-square" loading='lazy'/>
                <h3 className="text-green-v1 font-poppins text-2xl text-center m-auto uppercase py-3 ">{val.nombre}</h3>
                <ul className="list-disc ml-8 space-y-2 font-open-sans text-green-v1">
                    {val.datos.map((e,index2) => (
                        <li key={index2}>{e}</li>
                    ))}
                </ul>
            </div>
            </SwiperSlide>
            ))}
            <div className='h-7'></div>
            </Swiper>
        </div>
    </>
  )
}
