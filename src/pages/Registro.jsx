import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/registro.css";

export default function Registro(){

const navigate = useNavigate();

const [nombre,setNombre]=useState("");

const [correo,setCorreo]=useState("");

const [usuario,setUsuario]=useState("");

const [password,setPassword]=useState("");

const [confirmar,setConfirmar]=useState("");

const registrar=(e)=>{

e.preventDefault();

if(

!nombre ||

!correo ||

!usuario ||

!password ||

!confirmar

){

alert("Completa todos los campos");

return;

}

if(password!==confirmar){

alert(

"Las contraseñas no coinciden"

);

return;

}

localStorage.setItem(

"usuarioDemo",

JSON.stringify({

nombre,

correo,

usuario,

password

})

);

alert(

"Registro realizado correctamente"

);

navigate("/login");

};

return(

<div className="registroContainer">

<div className="registroCard">

<h1>

GANUS

</h1>

<p>

Crear Cuenta

</p>

<form onSubmit={registrar}>

<input

type="text"

placeholder="Nombre completo"

value={nombre}

onChange={(e)=>

setNombre(e.target.value)

}

/>

<input

type="text"

placeholder="Correo Electronico"

value={correo}

onChange={(e)=>

setCorreo(e.target.value)

}

/>

<input

type="text"

placeholder="Usuario"

value={usuario}

onChange={(e)=>

setUsuario(e.target.value)

}

/>

<input

type="password"

placeholder="Contraseña"

value={password}

onChange={(e)=>

setPassword(e.target.value)

}

/>

<input

type="password"

placeholder="Confirmar contraseña"

value={confirmar}

onChange={(e)=>

setConfirmar(e.target.value)

}

/>

<button type="submit">

Registrarme

</button>

</form>

<p className="volver">

¿Ya tienes cuenta?

<span

onClick={()=>navigate("/login")}

>

Iniciar sesión

</span>

</p>

</div>

</div>

);

}