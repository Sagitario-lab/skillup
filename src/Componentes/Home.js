import { Link } from "react-router-dom"
function Home(){
     
    const unlog=()=>sessionStorage.clear()

    return(
        <>
            <h2>Estoy en el Home</h2>
            <Link to={'/'} onClick={unlog}>Desloguearse 🐱‍👤</Link>
        </>
        
    )
}
    

export default Home