/* eslint-disable react/prop-types */
import "./BlogContent.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import CommentSection from "../components/CommentSection";
import { Helmet } from "react-helmet";
import NewNavBar from "../components/NewNavBar";

// eslint-disable-next-line react/prop-types
export default function BlogContent({ content }) {
  
  useEffect(()=>{
    const targetElement = document.getElementById("tit-blog")
      if(targetElement){
        targetElement.scrollIntoView({behavior:"smooth"})
      }
  },[])
  
  const esLista = (bloque) => {
    if (bloque.lista_ul.length > 0) {
      return (
        <ul className="lista_ul">
          {bloque.lista_ul.map((e, index) => {
            return <li key={index}>{e}{e[e.length-1]==="." || e[e.length-1]===":" ? "":"."}</li>;
          })}
        </ul>
      );
    } else if (bloque.lista_ol.length > 0) {
      return (
        <ol className="lista_ol" start={bloque.start}>
          {bloque.lista_ol.map((e, index) => {
            return (
              <li key={index}>
                {e.titulo} <br />
                <p>{e.info}{e[e.length-1]==="." || e[e.length-1]===":" ? "":"."}</p>
              </li>
            );
          })}
        </ol>
      );
    }
  };

  const hayFinal = (bloque) => {
    if (bloque.final.length > 0) {
      return (
        <>
          {bloque.final.map((e, index) => {
            return <p key={index}>{e}{e[e.length-1]==="." || e[e.length-1]===":" ? "":"."}</p>;
          })}
        </>
      );
    }
  };

  return (
    <>
    <Helmet>
    <meta
        name="description"
        content={content.introduccion[0]}
      />
      <title>EADES | Centro Psicoterapéutico | {content.titulo}</title>
    </Helmet>
    <NewNavBar/>
    <article className="blog-content">
      <h1 id="tit-blog">{content.titulo}</h1>
      <div className="bc-intro">
        <div className="bc-intro-text">
          {content.introduccion.map((e, index) => {
            return <p key={index}>{e}{e[e.length-1]==="." || e[e.length-1]===":" ? "":"."}</p>;
          })}
        </div>
        {content.img ? (<>
          <div className="bc-img" 
          style={{
            backgroundImage:`url(${content.img})`,
            backgroundSize:"cover",
            backgroundPosition:"center center"
          }}
          ></div>
        </>):(<>
        </>)}
        {content.youtube ? (<>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <iframe className="video-blog" src="https://www.youtube.com/embed/l7Edh6OAjEY?si=ESujnWSg85kYKAtB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </>):(<>
        </>)}
      </div>
      {content.bloques.map((bloque, index) => {
        return (
          <section key={index} className="bc-bloque">
            <h2>{bloque.titulo}</h2>
            {bloque.info.map((t, index) => {
              return (
                <p className="bc-bloque-p" key={index}>
                  {t}{t[t.length-1]==="." || t[t.length-1]===":" ? "":"."}
                </p>
              );
            })}
            {esLista(bloque)}
            {hayFinal(bloque)}
          </section>
        );
      })}
      <span>{content.autor}</span>
      <Link className="bc-link" to="/blog">
        <FontAwesomeIcon icon={faChevronLeft} /> Regresar
      </Link>
      <CommentSection id={content.id}/>
    </article>
    
    </>
  );
}
