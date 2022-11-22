import './App.css';
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  


  return (
   
    <header className="App-header">
        <form action = "" method = "POST">
          <input value={nombre} placeholder='Nombre' type="text" onChange={(e) =>{
            setNombre(e.target.value)
          }} />
          <input value={correo} placeholder='Correo' type="text"
            onChange={(e) =>{
            setCorreo(e.target.value)
          }}
          
          />
          <input value={telefono} placeholder='Telefono' type="text"
              onChange={(e) =>{
              setTelefono(e.target.value)
            }}
          />

        </form>
    </header>
    
  );
}

export default App;
