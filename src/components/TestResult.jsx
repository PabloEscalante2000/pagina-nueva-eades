/* eslint-disable no-unused-vars */
import {resTest} from "../data/RespuestaTest.js"
import "./TestResult.css"


// eslint-disable-next-line react/prop-types
function TestResult({tipo, nivel}) {
  
    const respuesta = resTest.find(e=>e.tipo === tipo && e.nivel === nivel)
    const handleContacto = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..."
    }
  
    return (
        <div className="resp-test !bg-celeste">
            <p>«{respuesta.des}»</p>
            <button onClick={handleContacto}>Contáctanos</button>
        </div>
    )
}

export default TestResult