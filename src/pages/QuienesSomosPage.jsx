import "./QuienesSomosPage.css"
import logo1 from "/educare.webp"
import logo2 from "/apciba_convenio.webp"
import logo4 from "/universidad_del_pacifico_convenio.webp"
import logo5 from "/esc_convenio_eades.webp"
import logo6 from "/ilumina_convenio_eades.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { psicologos } from "../data/psicologos"
import { useMemo, useState } from "react"
import { Helmet } from "react-helmet"
import NewNavBar from "../components/NewNavBar"

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
    <div className="bg-marroncito">
      <Helmet>
        <title>EADES | Centro Psicoterapéutico | Quienes Somos</title>
        <meta
        name="description"
        content="El centro psicoterapéutico realiza diferentes tipos de eventos, convenios y acercamientos, donde podamos ayudar y brindar la información necesaria."
      />
      </Helmet>
      <NewNavBar/>
      <section className="flex w-full justify-stretch items-stretch aspect-video sm:flex-row flex-col" style={{
        maxHeight:"calc(100dvh - 128px)"
      }}>
        <div className="relative basis-1/2 bg-red-50 min-h-64">
          <img src="quienes_somos_port.jpg" className="absolute inset-0 size-full object-cover" alt="EADES" style={{
            objectPosition:"25% 50%"
          }}/>
        </div>
        <div className="basis-1/2 flex justify-center items-center ">
          <div className="md:p-20 sm:p-10 p-5 space-y-10">
            <h2 className="font-poppins text-azul font-bold xl:text-5xl lg:text-4xl md:text-3xl">Centro <br/> Psicoterapéutico <br/> EADES</h2>
            <p className="font-open-sans text-azul xl:text-2xl lg:text-xl md:text-lg">
            El centro psicoterapéutico realiza diferentes tipos de eventos, convenios y acercamientos, donde podamos ayudar y brindar la información necesaria.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." 
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="Enlace para contactar a través de WhatsApp"
              className="block px-5 py-3 bg-azul text-marroncito w-fit xl:text-3xl lg:text-2xl border-2 border-azul md:text-xl transition-all ease-in-out duration-500 hover:bg-marroncito hover:text-azul"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>
      <section className="ter-qs bg-marroncito">
        <h2>Conoce nuestro equipo de Psicoterapeutas</h2>
        <section className="qs-cont-psi">
          <span onClick={backPsi} className={psi <= 0 ? "unactive":""}><FontAwesomeIcon icon={faArrowLeft}/></span>
          <section className="psi-data">
            <img src={psicologo.img_url} alt={psicologo.nombre} className={classPsi}/>
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
      <section className="sec-qs ">
        <h2>Alianzas con nuestro Centro Psicoterapéutico</h2>
        <section>
          <img src={logo1} alt="Educare convenio EADES"/>
          <img src={logo2} alt="Apciba convenio EADES"/>
          <figure>
            <img src={logo4} alt="Universidad del Pacífico convenio EADES"/>
            <figcaption>2019-2021</figcaption>
          </figure>
          <img src={logo5} alt="ESC Escucha Soluciona Crece convenio EADES"/>
          <img src={logo6} alt="Ilumina convenio EADES"/>
        </section>
      </section>
      
    </div>
  )
}

export default QuienesSomosPage