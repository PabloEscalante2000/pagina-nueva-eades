import "./Footer.css"
import logo from "/logo_eades.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-marroncito sm:p-10 p-5 font-poppins text-azul space-y-3">
        <img className="h-40" src={logo} alt="EADES"/>
        <p>Dirección:</p>
        <span>Pasaje El Pacayar 149, La Aurora - Miraflores</span>
        <p>Teléfono:</p>
        <span>+51 930 509 438</span>
        <p>Correo:</p>
        <span>infoeades@grupoeades.org</span>
        <div className="text-lg flex gap-2">
            <a
              className="a-display transition-all ease-in-out duration-500 hover:text-celeste"
              href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..."
            >
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
            <a className="a-display transition-all ease-in-out duration-500 hover:text-celeste" href="https://www.facebook.com/EADESPeru">
              <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
            </a>
            <a
              className="a-display transition-all ease-in-out duration-500 hover:text-celeste"
              href="https://www.instagram.com/eadespsicoterapia/"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a
              className="a-display transition-all ease-in-out duration-500 hover:text-celeste"
              href="https://www.youtube.com/@eadespsicoterapia"
            >
              <FontAwesomeIcon icon={faYoutube} className="icon" />
            </a>
        </div>
    </footer>
  )
}

export default Footer