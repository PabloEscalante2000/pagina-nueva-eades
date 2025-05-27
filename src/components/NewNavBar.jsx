import { faWhatsapp, faSquareFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { faBars, faCaretDown, faCaretUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import logoEades from "/logo_eades.webp"
import { useUbiContext } from "./UserContext";

export default function NewNavBar() {
  const history = useNavigate()
  const {actualizarUbi}=useUbiContext()
  const [visible, setVisible] = useState(false)
  const [listaDespegable, setListaDespegable] = useState(0)

  const servLista = [
    {
      nombre:"NIÑOS",
      id:"bs-1"
    },
    {
      nombre:"jÓVENES",
      id:"bs-2"
    },
    {
      nombre:"ADULTOS",
      id:"bs-3"
    },
    {
      nombre:"ADULTOS MAYORES",
      id:"bs-4"
    },
    {
      nombre:"FORMACIÓN PSICOTERAPÉUTICA",
      id:"bes-5"
    },
    {
      nombre:"TALLERES Y EVENTOS",
      id:"bes-6"
    }
  ]

  return (
    <>
    <div className={`${visible ? "block":"hidden"} fixed w-screen h-dvh top-0 left-0 bg-black bg-opacity-80 z-40`} onClick={() => setVisible(false)}></div>
    <nav className={`fixed left-full pt-5 w-52 z-50 text-azul font-poppins transition-all ease-in-out bg-marroncito h-dvh duration-500 flex flex-col justify-between ${visible ? "top-0 -translate-x-full opacity-100":"top-0 translate-x-0 opacity-0"}`}>
      <section>
      <div className="flex justify-end p-5">
        <button className="text-3xl" onClick={() => setVisible(false)} aria-label="cancel">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <ul className="flex-col justify-stretch ">
        <li className="flex justify-end items-center border-y-2 border-azul relative overflow-hidden">
          <NavLink className={({isActive}) => `hover:bg-azul hover:text-marroncito  transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${isActive ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} to={"/inicio"}>INICIO</NavLink>
        </li>
        <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
          <NavLink className={({isActive}) => `hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${isActive ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} to={"/quienes-somos"}>QUIÉNES SOMOS</NavLink>
        </li>
        <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
          <div className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative text-right w-full flex justify-between`} to={"/servicios"} >
            <button aria-label="desplegar" onClick={() => setListaDespegable((prev) => prev === 0 ? 2:0)} className="px-3 py-3 text-lg">
            {listaDespegable === 2 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ):(
              <FontAwesomeIcon icon={faCaretDown} />
            )}
            </button>
            <NavLink to={"/servicios"} className="px-2 py-3 w-full">SERVICIOS</NavLink>
          </div>
        </li>
        <div className={`transition-all ease-in-out duration-500 ${listaDespegable === 2 ? "h-[325px]":"h-0"}   overflow-hidden `}>
          {servLista.map((val,i) => (
            <li key={i} className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
            <button aria-label="nombre servicios" className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full "bg-marroncito text-azul`} to={"/test/test-de-ansiedad"} onClick={() => {
              actualizarUbi(val.id)
              history("/servicios")
              setVisible(false)
            }}>{val.nombre}</button>
          </li>
          ))}
        </div>
        <button aria-label="desplegar nav" className={`flex w-full justify-between items-center border-b-2 border-azul relative overflow-hidden transition-all ease-in-out duration-500 ${listaDespegable === 1 ? "bg-azul text-marroncito":""}`} onClick={() => setListaDespegable((prev) => prev === 0 ? 1:0)}>
          <span className="block px-3 text-lg">
            {listaDespegable === 1 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ):(
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </span>
          <div className={` ease-in-out relative py-3 px-2 text-right w-full`} to={"/servicios"}>TEST</div>
        </button>
        <div className={`transition-all ease-in-out duration-500 ${listaDespegable === 1 ? "h-[150px]":"h-0"}   overflow-hidden `}>
          <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
            <NavLink className={({isActive}) => `hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${isActive ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} to={"/test/test-de-ansiedad"}>TEST DE ANSIEDAD</NavLink>
          </li>
          <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
            <NavLink className={({isActive}) => `hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${isActive ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} to={"/test/test-de-depresion"}>TEST DE DEPRESIÓN</NavLink>
          </li>
          <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
            <NavLink className={({isActive}) => `hover:bg-azul hover:text-marroncito  transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${isActive ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} to={"/test/test-de-transtorno-de-la-personalidad-tlp"}>TEST DE TLP</NavLink>
          </li>
        </div>
        <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
          <NavLink className={({isActive}) => `hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${isActive ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} to={"/blog"}>BLOG</NavLink>
        </li>
      </ul>
      </section>
      <section className="flex justify-end gap-2 text-xl p-5 ">
        <a 
          target="_blank" 
          href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." 
          aria-label="Whatsapp"
          className="hover:text-celeste transition-all duration-500"
        > 
          <FontAwesomeIcon icon={faWhatsapp}/> 
        </a>
        <a
          target="_blank" href="https://www.facebook.com/EADESPeru" aria-label="Facebook"
          className="hover:text-celeste transition-all duration-500"
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/eadespsicoterapia/"
          aria-label="Instagram"
          className="hover:text-celeste transition-all duration-500"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@eadespsicoterapia"
          aria-label="Youtube"
          className="hover:text-celeste transition-all duration-500"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </section>
    </nav>
    <header className="flex justify-between items-center gap-5 sm:px-10 px-5  font-poppins w-full bg-marroncito text-azul">
      <img className="h-32" src={logoEades} alt="EADES"/>
      <ul className="sm:flex justify-center items-center gap-5 hidden">
        <li>
          <NavLink className={({isActive}) => `${isActive ? "border-b-2 border-azul":""}`} to={"/inicio"}>INICIO</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => `${isActive ? "border-b-2 border-azul":""}`} to={"/quienes-somos"}>QUIÉNES SOMOS</NavLink>
        </li>
        <li className="relative group">
          <NavLink className={({isActive}) => `${isActive ? "border-b-2 border-azul":""}`} to={"/servicios"}>SERVICIOS</NavLink>
          <ul className="absolute bg-marroncito p-0 space-y-3 transition-all duration-300 opacity-0 z-0 h-0 overflow-hidden group-hover:z-10 group-hover:opacity-100 group-hover:h-fit group-hover:p-3">
            <li>
              <button aria-label="niños" onClick={() => {
                actualizarUbi("bs-1")
                history("/servicios")
              }}>Niños</button>
            </li>
            <li>
              <button aria-label="jóvenes" onClick={() => {
                actualizarUbi("bs-2")
                history("/servicios")
              }}>Jóvenes</button>
            </li>
            <li>
              <button aria-label="adultos" onClick={() => {
                actualizarUbi("bs-3")
                history("/servicios")
              }}>Adultos</button>
            </li>
            <li>
              <button aria-label="adultos mayores" onClick={() => {
                actualizarUbi("bs-4")
                history("/servicios")
              }}>Adultos Mayores</button>
            </li>
            <li className="w-full text-left">
              <button aria-label="formación psicoterapéutica" className="w-full text-left" onClick={() => {
                actualizarUbi("bes-5")
                history("/servicios")
              }}>Formación Psicoterapéutica</button>
            </li>
            <li className="w-full text-left">
              <button aria-label="Talleres y eventos" className="w-full text-left" onClick={() => {
                actualizarUbi("bes-6")
                history("/servicios")
              }}>Talleres y eventos</button>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <NavLink className={({isActive}) => `${isActive ? "border-b-2 border-azul":""}`} to={"/test"}>TEST</NavLink>
          <ul className="absolute bg-marroncito p-0 space-y-3 transition-all duration-300 opacity-0 z-0 h-0 overflow-hidden group-hover:z-10 group-hover:opacity-100 group-hover:h-fit group-hover:p-3">
            <li>
              <NavLink to={"/test/test-de-ansiedad"}>Test de Ansiedad</NavLink>
            </li>
            <li>
              <NavLink to={"/test/test-de-depresion"}>Test de Depresión</NavLink>
            </li>
            <li>
              <NavLink to={"/test/test-de-transtorno-de-la-personalidad-tlp"}>Test de TLP </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className={({isActive}) => `${isActive ? "border-b-2 border-azul":""}`} to={"/blog"}>BLOG</NavLink>
        </li>
        <li className="flex justify-between items-center gap-2">
          <a 
            target="_blank" 
            href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." 
            aria-label="Whatsapp"
            className="hover:text-celeste transition-all duration-500"
          > 
            <FontAwesomeIcon icon={faWhatsapp}/> 
          </a>
          <a
            target="_blank" href="https://www.facebook.com/EADESPeru" aria-label="Facebook"
            className="hover:text-celeste transition-all duration-500"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/eadespsicoterapia/"
            aria-label="Instagram"
            className="hover:text-celeste transition-all duration-500"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@eadespsicoterapia"
            aria-label="Youtube"
            className="hover:text-celeste transition-all duration-500"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
      <button className="cursor-pointer text-3xl sm:hidden block" aria-label="Nav EADES" onClick={() => setVisible(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
    </>
  )
}
