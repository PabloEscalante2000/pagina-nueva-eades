import logo from "/logo_eades.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import fondo_espera from "/fondo_espera.webp"

function Footer() {

  const [pop,setPop] = useState(false)
  const [form,setForm] = useState(
    {
      nombre:"",
      telefono:"",
      email:"",
      mensaje:""
    }
  )

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("https://sendemaileades.pabloescalantetovar.com/",{
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
      })

      const data = await res.text()
      alert(data)
      setPop(false)

    } catch (error) {
        alert("Error al enviar: " + error.message)
    }
  }

  return (
    <>
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
        <div className={`flex flex-col justify-center items-center text-center cursor-pointer`} onClick={() => setPop(!pop)}>
          <img src="libro.png" alt="libro de reclamaciones" className="w-20"/>
          <p>
            Libro de <br/> Reclamaciones
          </p>
        </div>
      </section>
    </footer>
    <div className={` ${pop ? "fixed":"hidden"} top-0 left-0 w-full h-dvh bg-black/20 z-30`} onClick={() => setPop(!pop)}/>
    <section className={` ${pop ? "fixed scale-100":"hidden scale-95"} -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full max-w-[800px] p-5 rounded-lg z-40 transition-all`}>
      <div className="relative w-full h-full p-10">
        <button onClick={() => setPop(!pop)} className="absolute top-5 right-5 z-20 text-white size-10 text-3xl translate-x-1/2 -translate-y-1/2">
          <FontAwesomeIcon icon={faXmark}/>
        </button>
        <img src={fondo_espera} className="absolute w-full h-full inset-0 object-cover object-center z-10" />
        <div className="absolute w-full h-full inset-0 bg-black/40 z-10"/>
        <form onSubmit={handleSubmit} className="relative z-20 font-poppins space-y-5">
          <h2 className="text-center sm:text-lg text-sm text-white">
            ¡Habla con un Experto!<br/>
            Nuestro amigable equipo estará dispuesto a responder tus preguntas
          </h2>
          <input type="text" placeholder="Nombre" name="nombre" className="p-5 text-slate-400 bg-black/40 border-white border-2 outline-none w-full rounded-md" onChange={handleChange} required/>
          <div className="grid sm:grid-cols-2 grid-cols-1 w-full justify-stretch gap-5">
            <input type="text" placeholder="Teléfono" name="telefono" className="p-5 text-slate-400 bg-black/40 border-white border-2 outline-none col-span-1 rounded-md" onChange={handleChange} required/>
            <input type="email" placeholder="Email" name="email" className="p-5 text-slate-400 bg-black/40 border-white border-2 outline-none col-span-1 rounded-md" onChange={handleChange} required/>
          </div>
          <textarea onChange={handleChange} name="mensaje" placeholder="Mensaje" rows={4} className="p-5 text-slate-400 bg-black/40 border-white border-2 outline-none col-span-1 rounded-md w-full" style={{resize:"none"}} required />
          <input type="submit" value={"Submit"} className="w-full bg-black text-white font-open-sans text-xl text-center py-5 "/>
        </form>
      </div>
    </section>
    </>
  )
}

export default Footer