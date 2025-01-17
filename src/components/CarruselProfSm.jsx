import {psicologos as dataProfesional} from '../data/psicologos';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function CarruselProfSm() {

  return (
    <>
        <div className="w-full relative sm:hidden block">
        <Swiper
            modules={[Navigation,Pagination,EffectFade]}
            effect='fade'
            spaceBetween={30}
            navigation
            slidesPerView={1}
            pagination={{
                clickable:true,
            }}
            fadeEffect={{
                crossFade:true
            }}
            speed={800}
        >
            {dataProfesional.map((val,index) => (
            <SwiperSlide key={index}>
            <div  className=" bg-white text-azul border-2 border-celeste rounded-[40px] w-[70%] bg-opacity-60 m-auto p-5 mb-[50px] mt-[50px]">
                <img src={val.img_url} alt={val.nombre} className="object-cover h-56 w-full rounded-lg m-auto" loading='lazy'/>
                <h3 className="text-green-v1 font-poppins text-2xl text-center m-auto uppercase py-3 ">{val.nombre}</h3>
                <ul className="list-disc ml-8 space-y-2 font-open-sans text-green-v1 text-xs">
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
