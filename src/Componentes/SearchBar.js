import { useNavigate } from "react-router-dom";
import swAlert from "@sweetalert/with-react";
import '../Css/SearchBar.css'

function SearchBar() {



    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        let keyWord=e.currentTarget.keyword.value.trim()

        if(keyWord===""){
          swAlert("ERROR", "Empty field", "warning");
          return
        }
       
        console.log(keyWord)
        navigate(`/Resultados/${keyWord}`)
        console.log(keyWord)
        keyWord=e.currentTarget.keyword.v

    }

  return (
    <>
      <form onSubmit={submitHandler} className="SearchBar-cont">
        <label className="SearchBar">
          <input type="text" name="keyword" placeholder="Buscar..." className="SearchBar-input"></input>
        </label>
        
        <button type="submit" className="SearchBar-button">Buscar</button>
      </form>
    </>
  );
}

export default SearchBar;
