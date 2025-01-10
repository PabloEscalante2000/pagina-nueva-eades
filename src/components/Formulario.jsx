import { useState,useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./Formulario.css"
import { useUsuarioContext } from './UserContext'

export default function Formulario() {
 
    const navigate = useNavigate()
    
    const {usuario,actualizarUsuario} = useUsuarioContext()
    const manejarUsuario = ()=>{
        actualizarUsuario({
            nombre:nombre,
            edad:edad,
            lugar:lugar,
            correo:correo,
            celular:celular
        })
    }
    
    const [nombre,setNombre] = useState("")
    const [edad,setEdad] = useState(0)
    const [lugar,setLugar] = useState("")
    const [correo,setCorreo] = useState("")
    const [celular,setCelular] = useState("")

    const [mostrarTest, setMostrarTest] = useState(false)
    const mostrar = (res)=>{
        if(res){
            return <Outlet />
        }
    }

    useEffect(()=>{
    },[usuario])

    useEffect(()=>{
        setMostrarTest(false)
    },[navigate])

    
  
    return (
    <article>
        {!mostrarTest && <form onSubmit={(e)=>{
            e.preventDefault()
            setMostrarTest(true)
            manejarUsuario()
        }} className='formulario' id='formulario'>
            <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type='text' id='nombre' name='nombre' onChange={(e)=>{
                setNombre(e.target.value)
            }} value={nombre} required/>
            </div>

            <div>
            <label htmlFor="edad">Edad:</label>
            <input type='number' id='edad' name='edad' onChange={(e)=>{
                setEdad(e.target.value)
            }} value={edad} required/>
            </div>

            <div>
            <label htmlFor="paisCiudad">País/Ciudad:</label>
            <input type='text' id='paisCiudad' name='paisCiudad' onChange={(e)=>{
                setLugar(e.target.value)
            }} value={lugar} required/>
            </div>

            <div>
            <label htmlFor='correo'>Correo:</label>
            <input type='email' id='correo' name='correo' onChange={(e)=>{
                setCorreo(e.target.value)
            }} value={correo} required/>
            </div>

            <div>
            <label htmlFor='celular'>Celular:</label>
            <input type='tel' id='celular' name='celular' onChange={(e)=>{
                setCelular(e.target.value)
            }} value={celular} required/>
            </div>

            <button type="submit">Continuar</button>
        </form>}
        {mostrar(mostrarTest)}
    </article>
  )
}
