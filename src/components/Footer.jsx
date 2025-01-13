import logo from "/logo_eades.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-celeste sm:p-10 p-5 font-poppins text-azul space-y-3">
      <section className="flex flex-wrap justify-between items-center mr-20 gap-5">
        <div>
          <img className="h-40" src={logo} alt="EADES"/>
        </div>
        <div className="flex flex-wrap lg:justify-center lg:items-center gap-5 lg:flex-row flex-col">
          <span><p className="font-bold">Dirección:</p>
          Pasaje El Pacayar 149, La Aurora - Miraflores</span>
          <span><p className="font-bold">Teléfono:</p>
          +51 930 509 438</span>
          <span><p className="font-bold">Correo:</p>
          infoeades@grupoeades.org</span>
          <div className="text-lg flex gap-2">
              <a
                className="a-display transition-all ease-in-out duration-500 hover:text-marroncito"
                aria-label="Enlace para entrar a whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..."
              >
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
              <a 
                className="a-display transition-all ease-in-out duration-500 hover:text-marroncito" 
                href="https://www.facebook.com/EADESPeru"
                aria-label="Enlace para entrar a Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
              </a>
              <a
                className="a-display transition-all ease-in-out duration-500 hover:text-marroncito"
                href="https://www.instagram.com/eadespsicoterapia/"
                aria-label="Enlace para entrar a Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a
                className="a-display transition-all ease-in-out duration-500 hover:text-marroncito"
                href="https://www.youtube.com/@eadespsicoterapia"
                aria-label="Enlace para entrar a Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="icon" />
              </a>
          </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img src="libro.png" alt="libro de reclamaciones" className="w-20"/>
            <p>
              Libro de <br/> Reclamaciones
            </p>
          </div>
        
      </section>
    </footer>
  )
}

export default Footer