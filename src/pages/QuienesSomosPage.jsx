import "./QuienesSomosPage.css"
import logo1 from "/educare.webp"
import logo5 from "/esc_convenio_eades.webp"
import logo6 from "/ilumina_convenio_eades.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { psicologos } from "../data/psicologos"
import { useMemo, useState } from "react"
import { Helmet } from "react-helmet"
import NewNavBar from "../components/NewNavBar"
import CarruselProfSm from "../components/CarruselProfSm"

function QuienesSomosPage() {

  const [psi, setPsi] = useState(0)

  const classPsi = useMemo(()=>{
    if(psi === 0){
      return "cesar-img"
    } else if(psi === 1) {
      return "mateo-img"
    } else if(psi === 2) {
      return "mayte-img"
    } else if(psi === 3){
      return "melissa-img"
    } else {
      return "cesar-img"
    }
  },[psi])

  //State derivado
  const psicologo = psicologos[psi]

  const nextPsi = ()=>{
    if(psi < psicologos.length - 1){
      setPsi(prevPsi => prevPsi + 1)
    }
  }

  const backPsi = ()=>{
    if(psi > 0){
      setPsi(prevPsi => prevPsi - 1)
    }
  }

  return (
    <div className="bg-marroncito overflow-x-hidden">
      <Helmet>
        <title>EADES | Centro Psicoterapéutico | Quienes Somos</title>
        <meta
          name="description"
          content="El centro psicoterapéutico realiza diferentes tipos de eventos, convenios y acercamientos, donde podamos ayudar y brindar la información necesaria."
        />
      </Helmet>
      <NewNavBar/>
      <section className="flex w-full justify-stretch items-stretch aspect-video lg:flex-row flex-col" style={{
        height:"calc(100dvh - 128px)"
      }}>
        <div className="relative basis-7/12 bg-red-50 md:min-h-[400px] min-h-64">
          <img src="quienes_somos_port.jpg" className="absolute inset-0 size-full object-cover" alt="EADES" style={{
            objectPosition:"50% 35%"
          }}/>
        </div>
        <div className="basis-5/12 flex justify-center items-center ">
          <div className="md:p-20 sm:p-10 p-5 sm:space-y-10 space-y-5">
            <h2 className="font-poppins text-azul font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">Centro <br/> Psicoterapéutico <br/> EADES</h2>
            <p className="font-open-sans text-azul xl:text-2xl lg:text-xl md:text-lg">
            Espacio de bienestar emocional, trabajamos desde un enfoque integral que considera tus pensamientos, emociones, cuerpo y relaciones para ayudarte a encontrar equilibrio en todas las áreas de tu vida.
            </p>
          </div>
        </div>
      </section>
      <div className="sm:block hidden">
        <section className="ter-qs bg-marroncito p-10">
          <h2>Conoce nuestro equipo de Psicoterapeutas</h2>
          <section className="qs-cont-psi">
            <span onClick={backPsi} className={psi <= 0 ? "unactive":""}><FontAwesomeIcon icon={faArrowLeft}/></span>
            <section className="psi-data">
              <img src={psicologo.img_url} alt={psicologo.nombre} className={classPsi} />
              <aside>
                <h3>{psicologo.nombre}</h3>
                <em>{psicologo?.cpp}</em>
                <ul>
                  {psicologo.datos.map((e,index)=>{
                    return(<li key={index}>{e}</li>)
                  })}
                </ul>
                <a href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." target="_blank" className="border-2 border-azul px-3 py-1 bg-azul text-marroncito transition-all ease-in-out font-poppins hover:bg-marroncito hover:text-azul duration-500">Agenda tu cita</a>
              </aside>
            </section>
            <span onClick={nextPsi} className={psi >= 3 ? "unactive":""}><FontAwesomeIcon icon={faArrowRight}/></span>
          </section>
          <aside className="clave-psi">
            {psicologos.map((e,index)=>{
              return (
              <div key={index} onClick={()=>setPsi(index)} className={psi===index ? "active-cl": "def-cl"}></div>)
            })}
          </aside>
        </section>
      </div>
      <div className="sm:hidden block w-screen py-5">
        <h2 className="px-5 font-poppins font-bold text-2xl text-center text-azul">Conoce nuestro equipo de Psicoterapeutas</h2>
        <CarruselProfSm/>
      </div>
      <section className="sec-qs ">
        <h2 className="">Alianzas con nuestro Centro Psicoterapéutico</h2>
        <section>
          <img src={logo1} alt="Educare convenio EADES"/>
          
          <img src={logo5} alt="ESC Escucha Soluciona Crece convenio EADES"/>
          <img src={logo6} alt="Ilumina convenio EADES"/>
        </section>
      </section>
      
    </div>
  )
}

export default QuienesSomosPage