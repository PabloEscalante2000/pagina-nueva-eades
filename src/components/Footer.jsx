import logo from "/logo_eades.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-celeste sm:p-10 p-5 font-poppins text-azul space-y-3">
      <section className="flex flex-wrap justify-between items-end mr-20 gap-5">
        <div>
          <img className="h-40" src={logo} alt="EADES"/>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            infoeades@grupoeades.org
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            Pasaje El Pacayar 149, La Aurora - Miraflores
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            Jr. Cosmos 144 - Santiago de Surco
          </p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faWhatsapp} />{" "}
            +51 930 509 438
          </p>
          <p>
            <FontAwesomeIcon icon={faInstagram} />{" "}
            @eadespsicoterapia
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebook} />{" "}
            EADESPeru
          </p>
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