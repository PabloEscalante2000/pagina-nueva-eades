/* eslint-disable react/prop-types */


export default function BloqServicio({servicio, num}) {
  return (
    <div className={`${num === 1 ?"bg-azul text-white": num === 2 ?"bg-marroncito text-azul":"bg-celeste text-azul"}  `}>
        <section id={servicio.id} className="max-w-[1500px] m-auto md:p-10 p-5 rounded-md flex gap-10 md:flex-row flex-col md:justify-start md:items-start justify-center items-center  ">
            <img alt={servicio.id} src={servicio.img} className="md:w-96 md:h-96 w-64 h-64 rounded-md object-cover object-center flex-none"/>
            <aside className="font-open-sans ">
                <h2 className={` font-poppins  md:text-4xl text-2xl `}>{servicio.nombre}</h2>
                <div>
                    {servicio.descripcion.map((val,i) => (
                        <p key={i}>
                            {val}
                        </p>
                    ))}
                </div>
                <ul className="p-5 list-disc space-y-3">
                    {servicio.datosEsp.map((val,i) => (
                        <li key={i}><b>{val.titulo}</b>: {val.info}</li>
                    ))}
                </ul>
                <ul className="p-5 list-disc">
                    {servicio.datos.map((val,i) => (
                        <li key={i}>{val}</li>
                    ))}
                </ul>
            </aside>
        </section>
    </div>
  )
}
