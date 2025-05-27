import "./InicioPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import niños from "/niños2.jpg"
import jovenes from "/jovenes.jpg"
import adultos from "/adultos2.jpg"
import adul_mayores from "/adulto_mayor_servicio_eades.webp"
import formacionTera from "/form_terapeutica.jpg"
import colegios from "/taller_evento.jpg"
import { faClock, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons"
import { faUsers, faUserGear, faArrowAltCircleRight, faCaretRight, faDesktop, faChild} from "@fortawesome/free-solid-svg-icons"
import {useUbiContext} from "../components/UserContext"
import { useNavigate } from "react-router-dom"
import dif1 from "/virtual.jpg"
import dif2 from "/nuevo_eades_2.jpeg"
import sip from "/sip_logo.png"
import iaoth from "/iaoth.jpeg"
import euroasopsy from "/euroasopsy.png"
import nspa from "/nspa.png"
import member from "/member.jpeg"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Helmet } from "react-helmet"
import videoLanding from "/video_fondo_eades5.webm"
import NewNavBar from "../components/NewNavBar"
import Swal from "sweetalert2"

const preguntasFrecuentes = [
  {
    preg:"¿Cuanto dura cada sesión?",
    icon:faClock,
    res:"De 45 a 60 minutos."
  },
  {
    preg:"¿Cuáles son los métodos de pago?",
    icon:faMoneyBill1,
    res:"Aceptamos transferencias bancarias, tarjeta de crédito (recargo del 5%)."
  },
  {
    preg:"¿Cuál es la diferencia con otro tipo de terapia?",
    icon:faUsers,
    res:"Hacemos un seguimiento constante al paciente. El terapeuta siempre va estar dispuesto a conversar con el paciente, incluso fuera del horario de las sesiones."
  },
  {
    preg:"¿Tienen tarifa social?",
    icon:faUserGear,
    res:"Sí, contamos con una tarifa social (además de la tarifa regular)."
  },
  {
    preg:"¿La psicoterapia es online o solo presencial?",
    icon:faDesktop,
    res:"La terapia puede hacerce de manera online o presencial "
  },
  {
    preg:"¿El centro ofrece terapia para niños/adolescentes?",
    icon:faChild,
    res:"Sí, gracias a la colaboración de PSERES ofrecemos servicios a niños y adolecentes."
  }
]

const diferencias = [
  {
    nombre:"Seguimiento Constante",
    img:dif1,
    descripcion:"Estamos contigo en cada etapa de tu proceso terapéutico, asegurándonos de que avances de manera sostenida hacia tus objetivos"
  },
  {
    nombre:"Enfoque integral",
    img:dif2,
    descripcion:"Trabajaremos contigo de forma global, tomando en cuenta tus pensamientos, emociones, cuerpo y relaciones para lograr un equilibrio en todas las áreas de tu vida"
  },
  {
    nombre:"Diseño personalizado",
    img:dif1,
    descripcion:"Creamos soluciones únicas, adaptadas a tus necesidades y metas específicas, porque entendemos que cada persona es diferente."
  }
]

const serviciosPsicoterapeuticos = [
  {
    nombre:<>Niños</>,
    img:niños,
    ubi:"bs-1"
  },
  {
    nombre:<>Jóvenes</>,
    img:jovenes,
    ubi:"bs-1"
  },
  {
    nombre:<>Adultos</>,
    img:adultos,
    ubi:"bs-1"
  },
  {
    nombre:<>Adultos<br/>Mayores</>,
    img:adul_mayores,
    ubi:"bs-1"
  },
]

function InicioPage() {

  const {actualizarUbi}=useUbiContext()
  const history = useNavigate()

  const lanzarPregunta = (preg,res) => {
    Swal.fire({
      title: preg,
      text: res,
      icon: "question"
    });
  }
  
  return (
    <div className="overflow-x-hidden">
    <Helmet>
      <title>EADES | Centro Psicoterapéutico</title>
      <meta name="description" content="EADES - Somos un centro psicoterapéutico y escuela de análisis en donde abarcamos el malestar humano desde las bases psicoanalíticas y la terapia cognitiva posracionalista."/>
    </Helmet>
    <div className="relative">
      <div className=" top-0 left-0 z-10 w-full">
          <NewNavBar/>
      </div>
      <div className="w-full aspect-video relative max-h-[calc(100dvh_-_128px)]">
          <video className="absolute w-full h-full inset-0 object-cover object-top " muted loop autoPlay>
              <source src={videoLanding} type="video/mp4" />
          </video>
            <div className='absolute top-3 left-3 w-fit space-y-3 p-10 font-poppins text-azul bg-marroncito bg-opacity-50 backdrop-blur-sm lg:block hidden'>
              <h1 className='sm:text-5xl text-3xl font-bold'>Nos adaptamos<br/> a tus necesidades</h1>
            </div>
        </div>
    </div>
    <section className="space-y-5">
        <h2 className="font-poppins sm:px-10 px-5 sm:text-4xl text-3xl py-10 text-azul font-bold">SERVICIOS PSICOTERAPÉUTICOS</h2>
        <section className="flex justify-center md:flex-row flex-col py-20 lg:px-10 px-5 bg-celeste">
          <div className="w-full 2xl:space-y-0 lg:gap-16 gap-10 grid lg:grid-cols-4 md:grid-cols-2 md:mx-auto">
            {serviciosPsicoterapeuticos.map((val,i) => (
              <aside key={i} className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8 col-span-1">
                <img src={val.img} className="w-full object-cover object-center aspect-square "/>
                <div className="flex justify-between items-start text-4xl font-poppins text-azul sm:px-0 px-3">
                  <h3>{val.nombre}</h3>
                  <button className="transition-all duration-500 hover:text-marroncito"
                  onClick={()=>{
                    actualizarUbi(val.ubi)
                    history("/servicios")
                  }}
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </button>
                </div>
              </aside>
            ))}
            
          </div>
        </section>
    </section>
    <section className="my-5 bg-marroncito text-azul">
          <div className="sm:px-10 sm:py-10 p-5 max-w-[1500px] m-auto flex md:flex-row flex-col md:justify-start md:items-stretch justify-center items-center sm:gap-10 gap-5">
          <img src="/fundador.jpg" alt="César Escalante Sifuentes" className="w-96 h-96 object-cover object-center rounded-lg flex-none"/>
          <aside className="flex flex-col justify-between gap-3">
            <div>
              <h2 className="font-poppins font-bold sm:text-4xl text-3xl">CONOCE AL FUNDADOR</h2>
              <span className="sm:text-2xl text-2xl font-open-sans text-black">César Escalante</span>
              <p className="font-open-sans sm:text-xl text-base py-3 text-black">
              Fundador de Ilumina, fundador de Eades y cofundador de Pseres, líder en el ámbito de la salud mental con más de 25 años de experiencia. <br/>Psicólogo clínico con maestría en Neuropsicología, también se especializa en terapia de pareja. Como psicoterapeuta psicoanalítico, cuenta con una sólida trayectoria en el abordaje de trastornos de la personalidad y depresión, ofreciendo un enfoque profundo y especializado para promover el bienestar emocional de quienes acompaña en su proceso terapéutico.
              </p>
              <span className="font-breathing text-black">
                Cesar Escalante
              </span>
            </div>
            <div>
                <button className="text-marroncito bg-azul px-5 py-2 font-poppins font-bold transition-all duration-500 hover:bg-celeste block">
                  Contáctanos
                </button>
            </div>
          </aside>
          </div>
        </section>
    <div className="py-12 flex flex-col gap-10 xl:w-[1200px] w-full justify-center items-center mx-auto font-poppins">
            <h1 className="text-marron-oscuro text-center p-5 text-4xl font-poppins">Asociado a estas instituciones</h1>
            <div className="flex pt-10 flex-wrap gap-10 justify-center items-start">
                <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
                    <img src={sip} className="h-20" alt="SIP"/>
                    <span>Sociedad Interamericana de Psicología (SIP)</span>
                </div>
                <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
                    <img src={nspa} className="h-20" alt="Asociación NSAP"/>
                    <span>Sociedad Internacional de Neuropsicoanálisis</span>
                </div>
                <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
                    <img src={member} className="h-20" alt="London Intercultural Center"/>
                    <span>Centro Intercultural de Londres (LIC)</span>
                </div>
                <div className="max-w-96 text-center font-poppins-light flex flex-col justify-center items-center gap-5 mt-10">
                    <img src={iaoth} className="h-20" alt="IAOTH"/>
                    <span>Asociación Internacional de Terapeutas (IAOTH)</span>
                </div>

                <div className=" max-w-[560px] text-center font-poppins-light flex flex-col justify-center items-center gap-5 mt-10">
                    <img src={euroasopsy} className="h-20" alt="IAOTH"/>
                    <span>Asociación Europea de Psicología Aplicada (EAAP)</span>
                </div>
                
                
            </div>
        </div>
    <main className="sec-inicio">
      <h2 className="!text-3xl sm:!text-5xl !font-poppins font-bold text-azul mb-20">¿Cómo nos diferenciamos de otros?</h2>
      <section className="flex justify-center items-center flex-wrap gap-24">
        {diferencias.map((val,i) => (
          <aside key={i} className="h-[350px] w-[300px] relative flex justify-center items-center rounded-3xl perspective flip-card">
          <main className="flip-card-inner">
          <section className="flip-card-front">
            <div className="h-[350px] w-[300px] relative z-20 bg-azul bg-opacity-50 text-white rounded-3xl text-center font-poppins sm:text-2xl text-xl flex justify-center items-center font-bold p-10">
              <p>
                {val.nombre}
              </p>
            </div>
            <img className="absolute z-10 top-0 left-0 rounded-3xl h-[350px] w-[300px] object-cover object-top" alt="Seguimiento Constante EADES" src={val.img}/>
          </section>
          <section className="flip-card-back text-azul font-poppins sm:p-10 p-5 text-base flex justify-center items-center border-2 border-azul">
          {val.descripcion}
          </section>
          </main>
        </aside>
        ))}
      </section>
    </main>
      <section className="bg-marroncito">
        <div className="max-w-[1500px] m-auto flex gap-10 lg:flex-row flex-col lg:justify-start lg:items-start justify-center items-center lg:p-10 p-5">
          <video src="/video_maite.webm" className="object-center object-cover size-96 rounded-xl flex-none" alt="mayte" loop muted autoPlay/>
          <div className="text-azul font-open-sans space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-poppins md:text-4xl text-2xl font-bold">En EADES nos dedicamos a brindar servicios de calidad y confiabilidad</h3>
              <p className="text-lg">
                Estamos enfocados en el cuidado integral de la salud mental.  Nos especializamos en la prevención y solución de conflictos personales, familiares y de pareja, así como en el acompañamiento en todo tipo de malestares emocionales.<br/>Además, contamos con nuestro propio centro especializado en niños, llamado Pseres.<br/>Creemos que cada persona merece un espacio seguro para crecer, reflexionar y sanar, y trabajamos contigo para encontrar las herramientas necesarias para afrontar los desafíos de la vida.  Nuestro compromiso es acompañarte en cada paso hacia tu bienestar emocional.
              </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." target="_blank" className="px-5 py-3 bg-azul text-marroncito text-lg w-fit rounded-lg transition-all ease-in-out duration-500 hover:bg-celeste"> Agenda una cita</a>
          </div>
        </div>
      </section>
      <section className ="space-y-5">
        <h2 className="font-poppins sm:px-10 px-5 sm:text-4xl text-3xl py-10 text-azul uppercase font-bold">Servicios especializados en educación</h2>
        <section className="flex md:justify-center md:items-start justify-stretch items-stretch md:flex-row flex-col md:gap-10 gap-14 bg-azul py-10">
          <aside className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8">
            <img src={formacionTera} className="md:w-96 md:h-96 w-full h-64 object-cover object-center aspect-square"/>
            <div className="flex justify-between items-center text-4xl font-poppins text-white sm:px-0 px-3">
              <h3>Formación<br/> Psicoterapéutica</h3>
              <button className="transition-all duration-500 hover:text-celeste" onClick={()=>{
                actualizarUbi("bes-5")
                history("/servicios")
              }}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </div>
          </aside>
          <aside className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8 md:mt-20 lg:mt-0">
            <img src={colegios} className="md:w-96 md:h-96 w-full h-64 object-cover object-center aspect-square"/>
            <div className="flex justify-between items-center text-4xl font-poppins text-white sm:px-0 px-3">
              <h3>Talleres <br/> y eventos</h3>
              <button className="transition-all duration-500 hover:text-celeste" onClick={()=>{
                actualizarUbi("bes-6")
                history("/servicios")
              }}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </div>
          </aside>
        </section>
        </section> 
      <section className="space-y-5 py-5 sm:py-10">
        <h2 className="text-azul text-4xl font-open-sans sm:px-10 px-5">Preguntas Frecuentes</h2>
        <section className="grid gap-10 lg:grid-cols-2 grid-cols-1 justify-center items-center md:justify-stretch md:items-stretch sm:p-16 p-10">
          <div className="flex justify-center items-center">
            <img src="/preguntas_frecuentes.jpg" className="w-full object-cover object-center rounded-r-2xl 2xl:h-full lg:h-2/3" style={{
              objectPosition:"center"
            }}/>
          </div>
            <div className="grid gap-10 content-center 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 justify-center items-center w-fit lg:mx-0 mx-auto">
              {preguntasFrecuentes.map((val,i) => (
                <aside key={i} className="sm:size-52 bg-marroncito p-5 shadow-xl flex justify-around items-center sm:flex-col flex-row w-full rounded-2xl text-azul gap-5">
                  <p className="text-center font-poppins flex-1 py-2">
                    <FontAwesomeIcon icon={val.icon} className="text-xl"/><br/>{val.preg}
                  </p>
                  <button className="px-3 py-1 block font-open-sans bg-azul text-marroncito rounded-lg transition-all ease-in-out duration-500 hover:bg-celeste" 
                  aria-label="Preguntas Frecuentes"
                  onClick={() => lanzarPregunta(val.preg,val.res)}>
                    <span className="sm:block hidden">Más información</span>
                    <span className="sm:hidden block">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                  </button>
                </aside>
              ))}
            </div>
        </section>
      </section>
    </div>
  )
}

export default InicioPage