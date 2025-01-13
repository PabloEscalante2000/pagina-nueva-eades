import "./InicioPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import niños from "/niños2.jpg"
import jovenes from "/jovenes.jpg"
import adultos from "/adultos.jpg"
import adul_mayores from "/adulto_mayor_servicio_eades.webp"
import formacionTera from "/formacion-psicoterapeuta-eades.JPG?url"
import colegios from "/colegios-eades-min.jpg"
import { faClock, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons"
import { faUsers, faUserGear, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"
import {useUbiContext} from "../components/UserContext"
import { useNavigate } from "react-router-dom"
import dif1 from "/virtual.jpg"
import dif2 from "/nuevo_eades_2.jpeg"
import dif3 from "/seguimiento_constante.jpg"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Helmet } from "react-helmet"
import SwiperHome from "../components/SwiperHome"
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
    preg:"¿Cuál es la diferencia con otro tipo de terapia?",
    icon:faUsers,
    res:"Hacemos un seguimiento constante al paciente. El terapeuta siempre va estar dispuesto a conversar con el paciente, incluso fuera del horario de las sesiones."
  },
  {
    preg:"¿Tienen tarifa social?",
    icon:faUserGear,
    res:"Sí, contamos con una tarifa social (además de la tarifa regular)."
  }
]

const diferencias = [
  {
    nombre:"Seguimiento Constante",
    img:dif3,
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
    <div className="h-dvh w-screen relative">
      <div className="absolute top-0 left-0 z-10 w-full">
          <NewNavBar/>
      </div>
      <SwiperHome/>
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
        <div className="max-w-[1500px] m-auto flex gap-10 md:flex-row flex-col md:justify-start justify-center md:p-10 p-5">
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
        <h2 className="font-poppins sm:px-10 px-5 sm:text-4xl text-xl py-10 text-azul font-bold">SERVICIOS PSICOTERAPÉUTICOS</h2>
        <section className="flex justify-center md:gap-10 gap-14 md:flex-row flex-col mb-10 py-10 sm:px-10 px-5 bg-celeste">
          <div className="space-y-16 lg:space-y-0 flex lg:flex-row flex-col gap-10">
            <aside className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8">
              <img src={niños} className="md:w-96 md:h-96 w-full h-64 object-cover object-center "/>
              <div className="flex justify-between items-center text-4xl font-poppins text-azul sm:px-0 px-3">
                <h3>Niños</h3>
                <button className="transition-all duration-500 hover:text-marroncito"
                onClick={()=>{
                  actualizarUbi("bs-1")
                  history("/servicios")
                }}
                >
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </div>
            </aside>
            <aside className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8">
              <img src={adultos} className="md:w-96 md:h-96 w-full h-64 object-cover object-center"/>
              <div className="flex justify-between items-center text-4xl font-poppins text-azul sm:px-0 px-3">
                <h3>Adultos</h3>
                <button className="transition-all duration-500 hover:text-marroncito" onClick={()=>{
                  actualizarUbi("bs-3")
                  history("/servicios")
                }}>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </div>
            </aside>
          </div>
          <div className="md:mt-20 lg:mt-0 space-y-16 lg:space-y-0 flex lg:flex-row flex-col gap-10">
            <aside className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8">
              <img src={jovenes} className="md:w-96 md:h-96 w-full h-64 object-cover object-center"/>
              <div className="flex justify-between items-center text-4xl font-poppins text-azul sm:px-0 px-3">
                <h3>Jóvenes</h3>
                <button className="transition-all duration-500 hover:text-marroncito" onClick={()=>{
                  actualizarUbi("bs-2")
                  history("/servicios")
                }}>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </div>
            </aside>
            <aside className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8">
              <img src={adul_mayores} className="md:w-96 md:h-96 w-full h-64 object-cover object-center"/>
              <div className="flex justify-between items-center text-4xl font-poppins text-azul sm:px-0 px-3">
                <h3>Adultos <br/> Mayores</h3>
                <button className="transition-all duration-500 hover:text-marroncito" onClick={()=>{
                  actualizarUbi("bs-4")
                  history("/servicios")
                }}>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </div>
            </aside>
          </div>
        </section>
        <section className="my-5 bg-marroncito text-azul">
          <div className="sm:px-10 sm:py-10 p-5 max-w-[1000px] m-auto flex md:flex-row flex-col md:justify-start md:items-stretch justify-center items-center sm:gap-10 gap-5">
          <img src="/fundador.jpg" alt="César Escalante Sifuentes" className="w-80 rounded-lg flex-none"/>
          <aside className="flex flex-col justify-between">
            <div>
              <h2 className="font-poppins font-bold sm:text-4xl text-3xl">CONOCE AL FUNDADOR</h2>
              <span className="sm:text-2xl text-2xl font-open-sans text-black">César Escalante</span>
              <p className="font-open-sans sm:text-xl text-base py-3 text-black">
              Fundador de Eades, co-fundador de Pseres y líder en el ámbito de la salud mental, 
              Él es un psicólogo clínico con maestría en Neuropsicología.<br/>Como psicoterapeuta psicoanalítico, cuenta con una sólida experiencia en el abordaje de trastornos de la personalidad y depresión; aportando un enfoque profundo y especializado al bienestar emocional de cada persona que acompaña en su proceso terapéutico.
              </p>
              <span className="font-breathing text-black">
                Cesar Escalante
              </span>
            </div>
            <div>
                <button className="text-marroncito bg-azul px-5 py-2 font-poppins font-bold transition-all duration-500 hover:bg-celeste block ml-auto">
                  Contáctanos
                </button>
            </div>
          </aside>
          </div>
        </section>
        <section className="py-40 sm:px-10 px-5 flex justify-center items-center sm:gap-10 gap-5 flex-wrap">
            <aside className="text-azul font-poppins font-bold flex flex-col justify-center items-center">
              <h3 className="text-8xl">+30</h3>
              <p className="text-lg text-center">años de experiencia</p>
            </aside>
            <aside className="text-azul font-poppins font-bold flex flex-col justify-center items-center">
              <h3 className="text-8xl">+15</h3>
              <p className="text-lg text-center">años de experiencia</p>
            </aside>
            <aside className="text-azul font-poppins font-bold flex flex-col justify-center items-center">
              <h3 className="text-8xl">+15</h3>
              <p className="text-lg text-center">años de experiencia</p>
            </aside>
            <aside className="text-azul font-poppins font-bold flex flex-col justify-center items-center">
              <h3 className="text-8xl">+15</h3>
              <p className="text-lg text-center">años de experiencia</p>
            </aside>
        </section>
        <h2 className="font-poppins sm:px-10 px-5 sm:text-4xl text-xl py-10 text-azul uppercase font-bold">Servicios especializados en educación</h2>
        <section className="flex md:justify-center md:items-start justify-stretch items-stretch md:flex-row flex-col md:gap-10 gap-14 bg-azul py-10">
          <aside className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8">
            <img src={formacionTera} className="md:w-96 md:h-96 w-full h-64 object-cover object-center"/>
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
            <img src={colegios} className="md:w-96 md:h-96 w-full h-64 object-cover object-center"/>
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
        <section className="flex gap-10 lg:flex-row flex-col-reverse justify-center items-center md:justify-start sm:p-16 p-10">
            <img src="/preguntas_frecuentes.jpg" className="lg:w-1/2 object-cover rounded-tr-2xl rounded-br-2xl aspect-video flex-none" />
            <div className="grid gap-10 content-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center w-fit">
              {preguntasFrecuentes.map((val,i) => (
                <aside key={i} className="size-52 bg-marroncito p-5 shadow-xl flex justify-around items-center flex-col rounded-2xl text-azul">
                  <p className="text-center font-poppins flex-1 py-2">
                    <FontAwesomeIcon icon={val.icon} className="text-xl"/><br/>{val.preg}
                  </p>
                  <button className="px-3 py-1 block font-open-sans bg-azul text-marroncito rounded-lg transition-all ease-in-out duration-500 hover:bg-celeste" onClick={() => lanzarPregunta(val.preg,val.res)}>Más información</button>
                </aside>
              ))}
            </div>
        </section>
      </section>
    </div>
  )
}

export default InicioPage