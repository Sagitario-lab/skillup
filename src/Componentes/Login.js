import axios from "axios";
import swAlert from "@sweetalert/with-react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  

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

        history("/Listado");
      });
  };

  return (
    <>
      <div className="Login-cont">
        <h2 className="Login-title">
          Discover <br></br> new films
        </h2>
        <form onSubmit={submitHandler}>
          <div>
            <span className="login-text">E-Mail</span>
            <br />
            <input type="email" name="email" className="login-input" placeholder="challenge@alkemy.org"></input>
          </div>
          <br />
          <div>
            <span>Password</span>
            <br />
            <input
              type="password"
              name="password"
              className="login-input" placeholder="react"
            ></input>
          </div>
          <br />
          <button type="submit" className="login-button">
            Log-in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
