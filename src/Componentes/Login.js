import axios from "axios";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

    if (email === "" || password === "") {
      console.log("Campos vacios");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      console.log("escribe bien");
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("Credenciales incorrectas");
      return;
    }
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <h2>Formulario Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo Electrónico</span>
          <br />
          <input type="text" name="email"></input>
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
