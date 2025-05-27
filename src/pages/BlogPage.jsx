import "./BlogPage.css"
import {blog1,blog2,blog3,blog4,blog5,blog6,blog7} from '../data/BlogData'
import { Helmet } from "react-helmet"
import NewNavBar from "../components/NewNavBar"
import { Link } from "react-router-dom"

export default function BlogPage() {

  const array = [blog1,blog2,blog3,blog4,blog5,blog6,blog7]

  return (
    <>
    <Helmet>
      <meta
        name="description"
        content="EADES - Bienvenido a nuestra página de blogs de salud mental, tu recurso definitivo para información, consejos y apoyo sobre bienestar emocional y psicológico. Aquí encontrarás una colección curada de artículos escritos por expertos en salud mental, terapeutas, y personas que comparten sus experiencias personales. Nuestro objetivo es proporcionar contenido valioso y relevante que te ayude a entender mejor y gestionar tu salud mental."
      />
      <title>EADES | Centro Psicoterapéutico | Blog</title>
    </Helmet>
    <NewNavBar/>
    <section className="grid grid-cols-1 sm:p-10 p-5 gap-10">
      <section className="col-span-3 space-y-10 gap-10">
        <div className="w-full gap-6 flex flex-col justify-center">
          <img src={blog1.img_url} alt={blog1.descrpcion} className="w-full h-[500px] object-cover object-center"/>
          <h2 className="text-azul font-poppins sm:text-3xl text-xl font-bold sm:px-10 px-5 text-center">{blog1.nombre}</h2>
          <p className="font-open-sans sm:text-lg text-base sm:px-10 px-5 text-center">{blog1.descrpcion}</p>
          <Link to={blog1.url} className="text-xl font-poppins text-white bg-black sm:px-10 px-2 py-2 transition-all ease-in-out duration-500 hover:bg-azul block text-center w-fit m-auto">Leer más</Link>
        </div>
        <section className="grid lg:grid-cols-2 grid-cols-1 justify-stretch gap-10">
          {array.slice(1,7).map((b,i)=>(
            <div className="w-full gap-6 flex flex-col justify-center" key={i}>
            <img src={b.img_url} alt={b.descrpcion} className="w-full h-96 object-cover object-center"/>
            <h2 className="text-azul font-poppins sm:text-3xl text-xl font-bold sm:px-10 px-5 text-center">{b.nombre}</h2>
            <p className="font-open-sans sm:text-lg text-base sm:px-10 px-5 text-center line-clamp-6">{b.descrpcion}</p>
            <Link to={b.url} className="text-xl font-poppins text-white bg-black sm:px-10 px-2 py-2 transition-all ease-in-out duration-500 hover:bg-azul block text-center w-fit m-auto">Leer más</Link>
          </div>
          ))}
        </section>
      </section>
    </section>
    </>
  )
}
