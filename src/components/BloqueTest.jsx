/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./BloqueTest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useResContext} from "./UserContext";
import TestResult from "./TestResult";
import { Helmet } from "react-helmet";
import {descriptionTest} from '../data/descriptionTest.js';

export default function BloqueTest({ test, tipo }) {
  const { res, actualizarRes } = useResContext();

  const [position, setPosition] = useState(0);
  const [miarray, setMiArray] = useState([]);

  //Valores para el resultado
  const [nivel,setNivel] = useState("")
  const [end,setEnd] = useState(false)

  const mostarErrorVacio = () => {
    Swal.fire({
      icon: "error",
      title: "Tienes que seleccionar al menos una alternativa",
    });
  };

  const mostrarGuardadExitoso = () => {
    Swal.fire({
      title: "¿Quieres terminar el test?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        imprenta();
        let resAlt = [];
        for (var i = 0; i < test.length; i++) {
          let respuestas = [];

          miarray[i].map((e) => {
            respuestas = [...respuestas, test[i].respuestas[e]];
          });

          let valor = {
            titulo: test[i].titulo,
            respuestas: respuestas,
          };

          resAlt = [...resAlt, valor];
        }

        let res_nivel = 0
        for(let i = 0; i < test.length; i++){
          const middle = (test[i].respuestas.length - 1) / 2
          const tot_array = miarray[i].reduce((total,num)=>{
            return total + (num - middle)
          },0)
          res_nivel = res_nivel + tot_array
        }

        if(res_nivel > 3) {
          setNivel("bajo")
        } else if (res_nivel < 3 && res_nivel > -3) {
          setNivel("medio")
        } else if(res_nivel < -3){
          setNivel("alto")
        }
        
      } else if (result.isDenied) {
        console.log(".")
      }
    });
  };

  const verificacion = () => {
    var inputs = document.getElementsByName("grupo");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        return true;
      }
    }
    return false;
  };

  const guardado = () => {
    var inputs = document.getElementsByName("grupo");
    var array = miarray;
    var seleccionado = [];
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        seleccionado = [...seleccionado, i];
      }
    }
    array[position] = seleccionado;
    setMiArray(array);
  };

  const seleccion = () => {
    var inputs = document.getElementsByName("grupo");
    for (var i = 0; i < inputs.length; i++) {
      if (miarray[position] !== undefined) {
        if (miarray[position].includes(i)) {
          inputs[i].checked = true;
        } else {
          inputs[i].checked = false;
        }
      } else {
        inputs[i].checked = false;
      }
    }
  };

  const imprenta = () => {
    let res = [];
    for (var i = 0; i < test.length; i++) {
      let respuestas = [];

      miarray[i].map((e) => {
        respuestas = [...respuestas, test[i].respuestas[e]];
      });

      let valor = {
        titulo: test[i].titulo,
        respuestas: respuestas,
      };

      res = [...res, valor];
    }

    const manejarRes = () => {
      actualizarRes({
        respuestas: res,
      });
    };

    manejarRes();
  };

  useEffect(() => {
    seleccion();
  }, [position]);

  useEffect(() => {
    
  }, [res]);

  useEffect(() => {
    actualizarRes(null);
    setPosition(0);
    setMiArray([]);
  }, [test]);

  useEffect(()=>{
    if(nivel !== ""){
      setEnd(true)
    }
  },[nivel])

  useEffect(()=>{
    if(end){
      resultadoDiv()
    }
  },[end])

  const resultadoDiv = () => {
    const targetElement = document.getElementById("resultado")
      if(targetElement){
        targetElement.scrollIntoView({behavior:"smooth"})
      }
  }

  const description = () => {
    const res = descriptionTest.filter(d => d.test === tipo)
    return res.description
  }

  return (
    <>
    <Helmet>
      <title>
      EADES | Centro Psicoterapéutico | {tipo}
      </title>
      <meta
      name="description"
      content={description}
    />
    </Helmet>
    <div id="tit-preg">
      {end ? (<div id="resultado"><TestResult tipo={tipo} nivel={nivel}/></div>) : (
        <div>
        {test[position] !== undefined ? (
          <section className={`section-test ${tipo === "ansiedad" ? "bg-ansiedad":tipo === "tlp" ? "bg-tlp":"bg-depresion"}`}>
            <div className="space-y-10 px-5">
            <h3 className="uppercase font-poppins text-azul text-4xl block font-bold py-3 px-5 rounded-xl bg-white w-full text-center ">TEST DE {tipo}</h3>
            <form
              className="!bg-opacity-95 shadow-lg bg-white"
              onSubmit={(e) => {
                e.preventDefault();
                if (position !== test.length - 1 && verificacion()) {
                  guardado();
                  setPosition(position + 1);                  
                } else if (position === test.length - 1 && verificacion()) {
                  guardado();
                  mostrarGuardadExitoso();
                  
                  console.log(miarray);
                } else if (!verificacion()) {
                  mostarErrorVacio();
                  console.log("falta rellenar los datos");
                }
  
                const targetElement = document.getElementById("tit-preg")
                if(targetElement){
                  targetElement.scrollIntoView({behavior:"smooth"})
                }
              }}
            >
              
              {position !== 0 && (
                <button
                className="test-regresar"
                onClick={() => {
                  if (position !== 0 && verificacion()) {
                    guardado();
                    setPosition(position - 1);
                  } else if (!verificacion()) {
                    mostarErrorVacio();
                    console.log("rellena los datos");
                  }
                }}
                >
                    <div>
                      <FontAwesomeIcon icon={faChevronLeft} /> Regresar{" "}
                    </div>
                </button>
              )}
              
              <h1 >{test[position].titulo}</h1>
              {test[position].respuestas.map((e, index) => {
                if (test[position].tipo === "radio") {
                  return (
                    <div key={index}>
                      <input
                        type="radio"
                        id={"opcion" + index + "pos" + position}
                        name="grupo"
                        value={e}
                      />
                      <label htmlFor={"opcion" + index + "pos" + position}>
                        {e}
                      </label>
                    </div>
                  );
                } else if (test[position].tipo === "check") {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={"opcion" + index + "pos" + position}
                        name="grupo"
                        value={e}
                      />
                      <label htmlFor={"opcion" + index + "pos" + position}>
                        {e}
                      </label>
                    </div>
                  );
                } else {
                  return "";
                }
              })}
              <button className="test-siguiente">
                {position !== test.length - 1 ? "Continuar" : "Terminar Test"}
              </button>
            </form>
            </div>
          </section>
        ) : (
          setPosition(0)
        )}
      </div>
      ) }   
    </div>   
    </> 
  );
}
