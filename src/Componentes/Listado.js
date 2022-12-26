import { Link,useNavigate } from "react-router-dom"
import { useEffect } from "react"
function Listado(){
    const redirection=useNavigate()
    
    
    
    useEffect(() => {
        const token= localStorage.getItem('token')
        
        if(token===null){
            redirection('/')
        }
    
      
    },)
    

    return(
        <>
            <h2>Soy el componente Listado</h2>
            <button> <Link to='/'> vamos al login</Link></button>
        </>
    )

}
export default Listado