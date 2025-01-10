import "./WhIcon.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function WhIcon(){

    return (
        <>
        <a 
            href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." 
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="Enlace para contactar a través de WhatsApp"
            className="fixed w-20 h-20 bottom-5 right-5 bg-azul border-2 border-celeste flex justify-center items-center rounded-lg transition-all ease-in-out duration-500 bg-opacity-80 backdrop-blur-sm hover:scale-90 cursor-pointer text-white text-3xl z-10 hover:bg-opacity-90"><FontAwesomeIcon icon={faWhatsapp} bounce /></a>
        </>
    )
}