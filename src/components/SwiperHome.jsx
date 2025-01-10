import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper/modules"

export default function SwiperHome() {
  return (
    <div className="w-full h-full">
        <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay:6000,
        reverseDirection:true,
        disableOnInteraction:false,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-inicio"
      >
      <SwiperSlide>
      <section className="h-dvh w-screen bg-cover bg-center flex flex-col justify-end sm:p-10 p-5  pri-img1">
        <div className='w-fit space-y-3 p-10 font-poppins text-azul bg-marroncito bg-opacity-60 backdrop-blur-sm'>
          <h1 className='sm:text-5xl text-3xl font-bold'>Tu bienestar<br/> es nuestra prioridad</h1>
        </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      <section className="h-dvh w-screen flex flex-col justify-end sm:p-10 p-5 pri-img2">
        <div className='w-fit space-y-3 p-10 font-poppins text-azul bg-marroncito bg-opacity-60 backdrop-blur-sm'>
          <h1 className='sm:text-5xl text-3xl font-bold'>Nos adaptamos<br/> a tus necesidades</h1>
        </div>
      </section>
      </SwiperSlide>      
    </Swiper>
    </div>
  )
}
