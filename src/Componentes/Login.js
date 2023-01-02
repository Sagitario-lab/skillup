import axios from "axios";
import swAlert from "@sweetalert/with-react";

import {  useNavigate } from "react-router-dom";


function Login() {

  const history=useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

    if (email === "" || password === "") {
      swAlert("ERROR", "Los campos no pueden estar vacios", "warning");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      swAlert("ERROR", "Escribe bien el email", "warning");
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert("ERROR", "Credenciales incorrectas", "warning");
      return;
    }
    
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido);
        
        history('/Home')
      });
  };

  return (
    <>
    
      <h2>Formulario Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo Electrónico</span>
          <br />
          <input type="email" name="email"></input>
        </label>
        <br />
        <label>
          <span>Contraseña</span>
          <br />
          <input type="password" name="password"></input>
        </label>
        <br />
        <button type="submit">Ingresar</button>
      </form>
      
    </>
  );
}

export default Login;
