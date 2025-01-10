import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./CommentSection.css"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { auth, provider, db } from "../config/firebase"
import { signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { getDocs, collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"


// eslint-disable-next-line react/prop-types
export default function CommentSection({id}) {
    
    //CommentList
    const [commentList, setCommentList] = useState([])
    const collectionListRef = collection(db,"comentarios")

    //Textarea Info
    const [description, setDescription] = useState("")
    
    //User Google
    const [user,setUser] = useState(auth?.currentUser)

    const getCommentList = async () => {
        try {
            const data = await getDocs(collectionListRef)
            const filteredData = data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id
            })).filter(doc=>doc.id_blog === id)
            setCommentList(filteredData)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(()=>{
        setUser(auth?.currentUser)
        getCommentList()
    },[])
  
    const verUser = () => {
        if(auth?.currentUser){
            console.log(auth?.currentUser?.email)
        } else {
            console.log("no hay usuario")
        }
    }

    const handleAddComment = async () => {
        try {
            if(user && description.length > 0){
                await addDoc(collectionListRef, {
                    user:user.displayName,
                    url_img:user.photoURL,
                    description:description,
                    id_blog:id
                })
                setDescription("")
                getCommentList()
            } else if(!user) {
                Swal.fire({
                    title:"Ups... Parece que no te has registrado",
                    showCancelButton:true
                })
            } else {
                Swal.fire({
                    title:"Ups... Parece que no escribiste nada",
                    showCancelButton:true
                })
            }    
        } catch (error) {
            console.error(error)
        }
    }
    
    const verificationGoogle = async (e) => {
        e.preventDefault()
        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.error(err)
        }
        setUser(auth?.currentUser)
    }

    const cerrarSesion = async (e) => {
        e.preventDefault()
        try {
            await signOut(auth, provider)
            setUser(auth?.currentUser)
        } catch (error) {
            console.error(error)
        }
    }
  
    return (
    <div className="comment-sec">
        <h3>Escribe un comentario</h3>
        <form>
            {user ? (<>
                <div>
                    <img src={user?.photoURL} alt={user?.email}/>
                    <p>{user?.email}</p>
                </div>
            </>):(<>
            
            </>)}
            {user ? (<></>) : ( <label>Regístrate:</label>)}
            {user ? (<button onClick={(e)=>cerrarSesion(e)}>Cerrar Sesión</button>):
            (<button style={{display:"block"}} onClick={(e)=>verificationGoogle(e)}><FontAwesomeIcon icon={faGoogle}/></button>)}
            <br></br>
            <label htmlFor="textarea-com"> Escribe tu comentario: </label>
            <br></br>
            <textarea rows={4} id="textarea-com"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
            <br></br>
            <button onClick={(e) => {
                e.preventDefault()
                verUser()
                console.log(user)
                handleAddComment()
            }}> Enviar </button>
        </form>
        <h4>Comentarios</h4>
        <div>
            {commentList.map((doc)=>(
                <div className="comment-card" key={doc.id}>
                    <img src={doc.url_img}/>
                    <div>
                        <h5>{doc.user}</h5>
                        <p>{doc.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
