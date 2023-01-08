import { useParams } from "react-router-dom"


function Resultados(){

    const {movieTitle}=useParams()

    return(
        <>
            <h2>Resultados de: {movieTitle}</h2>
        </>
    )
}

export default Resultados