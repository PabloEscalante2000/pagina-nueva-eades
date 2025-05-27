import "./ServiciosPage.css"
import { servicios } from "../data/servicios"
import { useEffect } from "react"
import {useUbiContext} from '../components/UserContext';
import { Helmet } from "react-helmet";
import NewNavBar from "../components/NewNavBar";
import BloqServicio from "../components/BloqServicio";

function ServiciosPage() {
  
  const {ubi,actualizarUbi}=useUbiContext()

  useEffect(()=>{
    if(ubi!== null){
      const targetElement = document.getElementById(ubi)
      if(targetElement){
        targetElement.scrollIntoView({behavior:"smooth"})
      }
      actualizarUbi(null)
    }
  },[ubi])

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Helmet>
      <meta
        name="description"
        content="Conoce nuestros serivicios psicoterapéuticos: Servicios especializados a niños, jóvenes, adultos y adultos mayores."
      />
      <title>EADES | Centro Psicoterapéutico | Servicios</title>
      </Helmet>
    
      <main className=" relative pri-serv h-dvh w-screen flex justify-end flex-col bg-cover bg-center"  id="bs">
        <div className="absolute top-0 left-0 z-10 w-full">
        <NewNavBar/>
        </div>
        <h1 className="sm:text-5xl text-3xl font-poppins text-azul sm:p-10 p-5 bg-marroncito sm:m-10 m-5 max-w-[600px] bg-opacity-80 font-bold">Conoce nuestros serivicios psicoterapéuticos</h1>
      </main>
      <section className=" my-10 flex flex-col justify-stretch items-stretch gap-5 m-auto">
        {servicios.slice(0,4).map((serv,i) => (
          <BloqServicio key={i} servicio={serv} num={i % 2 === 0 ? 1:2}/>
        ))}
        <h2 className="text-azul font-poppins sm:text-4xl text-xl mt-5">Conoce nuestros servicios enfocados en la formación</h2>
        {servicios.slice(4,6).map((serv,i) => (
          <BloqServicio key={i} servicio={serv} num={i % 2 === 0 ? 1:3}/>
        ))}
      </section>
    </div>
  )
}

export default ServiciosPage