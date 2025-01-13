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
    <>
    <Helmet>
      <title>EADES | Centro Psicoterapéutico | Quienes Somos</title>
      <meta
      name="description"
      content="El centro psicoterapéutico realiza diferentes tipos de eventos, convenios y acercamientos, donde podamos ayudar y brindar la información necesaria."
    />
    </Helmet>
    <NewNavBar/>
      <section className="pri-qs">
        <h1>Centro Psicoterapéutico EADES</h1>
        <p>El centro psicoterapéutico realiza diferentes tipos de eventos, convenios y acercamientos, donde podamos ayudar y brindar la información necesaria.</p>
      </section>
      <section className="sm:p-10 p-5 flex gap-10 lg:flex-row flex-col">
        <aside>
          <h2 className="font-poppins sm:text-3xl text-xl text-azul font-bold">Quiénes Somos</h2>
          <p className="font-open-sans text-lg text-azul py-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, nisi quam a, non unde eligendi, eaque officia impedit voluptates minus quia nemo repellat. Illo adipisci, rerum ipsa fuga soluta similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique illum nulla dolore recusandae? Et non asperiores deleniti porro tenetur eligendi exercitationem, quis iste blanditiis quibusdam laboriosam doloribus quae dolore fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet obcaecati doloremque mollitia hic! Corrupti fugit quis numquam provident error cumque fuga quidem sed quibusdam, inventore veniam, eveniet hic dolore?
          </p>
        </aside>
        <img src="preguntas_frecuentes.jpg" className="h-96 flex-none object-cover object-center" alt="EADES"/>
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
      
    </>
  )
}

export default QuienesSomosPage