import { useState } from 'react'
import './App.css'

function App() {

  
  var [userInfo, setUserInfo] = useState( {name: "Luis", lastName: "Gutierrez", gitHubUsername: "ZeroXionXZ", role: "Teacher"});
  
  const [mostrarComponente, setMostrarComponente] = useState(false);

  function handleSubmit(e) {
    // Prevent the default form submit
    e.preventDefault();

    // Getting the form data
    const form = e.target;
    const formData = new FormData(form);

    // Formating the information
    const formJson = Object.fromEntries(formData.entries());
    // alert('Form data: ' + formJson.myInput);
    console.log(formJson);
    setUserInfo({name: formJson.name, lastName: formJson.lastName, gitHubUsername: formJson.gitHubUsername, role: formJson.myRadioRole});
    setMostrarComponente(false)
    alert("Information updated successfully!");
  }
  
  return (
    <>
      <h1>User information</h1>
      <div class="contenedor">
        <div class="columna1">
          <img 
            alt="User avatar"
            src={`https://unavatar.io/github/${userInfo.gitHubUsername}`} />
          </div>
        <div class="columna2">
          <h2>Name: {userInfo.name} </h2>
          <h2>Last name: {userInfo.lastName} </h2>
          <h2>Role: {userInfo.role} </h2>
          <h2>GitHub username: {userInfo.gitHubUsername} </h2>
        </div>
      </div>
      {/*Con un estado adicional le dicen cuando mostrarse o no*/}
      <button onClick={() => setMostrarComponente(!mostrarComponente)}>
        {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
        {mostrarComponente ? `Cancel` : `Edit information`}
      </button>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && 
          <form method="post" onSubmit={handleSubmit}>
            <h2>Update information</h2>
            <h3>
              Nombre: <input name="name" defaultValue={userInfo.name} />
            </h3>
            <h3>
              Apellido: <input name="lastName" defaultValue={userInfo.lastName} />
            </h3>
            <h3>
              GitHub username: <input name="gitHubUsername" defaultValue={userInfo.gitHubUsername} />
            </h3>
            <h3>
              Rol:
              <label><input type="radio" name="myRadioRole" value="Student" defaultChecked={true}/> Student</label>
              <label><input type="radio" name="myRadioRole" value="Teacher"  /> Teacher</label>
            </h3>

            <button type="submit">Update information</button>
          </form>
        }
      </div>
    </>
  );
}

export default App
