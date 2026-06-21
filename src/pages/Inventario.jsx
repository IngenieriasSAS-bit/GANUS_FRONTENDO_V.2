import { useState } from "react";

import Sidebar from "../components/Sidebar";

import NuevoAnimal from "../components/NuevoAnimal";

import {

FaSearch,

FaPlus,

FaEye,

FaEdit

}

from "react-icons/fa";

import "../styles/inventario.css";


export default function Inventario() {

    const [activos] = useState(() => {
        return JSON.parse(localStorage.getItem("animales")) || [];
    });

    const [busqueda, setBusqueda] = useState("");

    const [mostrarModal, setMostrarModal] = useState(false);

    const [animalSeleccionado,setAnimalSeleccionado]=useState(null);

    const [modo,setModo]=useState("");
    

    const activosFiltrados = activos.filter((animal) =>

        animal.rfid

            .toString()

            .toLowerCase()

            .includes(

                busqueda.toLowerCase()

            )

    );


    return (

        <>

            <Sidebar />

            <div className="inventario">

                <h1>

                    Inventario GANUS

                </h1>

                <p>

                    Fuente única de verdad del negocio.

                </p>


                <div className="accionesInventario">


                    <div className="buscador">

                        <FaSearch />

                        <input

                            type="text"

                            placeholder="Buscar por RFID"

                            value={busqueda}

                            onChange={(e) =>

                                setBusqueda(e.target.value)

                            }

                        />

                    </div>


                    <button

className="btnNuevo"

onClick={() => setMostrarModal(true)}

>

<FaPlus />

Nuevo Animal

</button>

{

mostrarModal && (

<NuevoAnimal

cerrar={() =>

setMostrarModal(false)

}

actualizar={() =>

window.location.reload()

}

/>

)

}

                </div>


                <div className="tablaContainer">

               <table>
               
                    <thead>

                        <tr>

                            <th>Código</th>

                            <th>Nombre</th>

                            <th>RFID</th>

                            <th>Sexo</th>

                            <th>Raza</th>

                            <th>Peso</th>

                            <th>Estado</th>

                            <th>Acciones</th>

                        </tr>

                    </thead>


                    <tbody>

                        {

                            activosFiltrados.map((animal) => (

                                <tr key={animal.id}>


                                    <td>

                                        {animal.codigo}

                                    </td>


                                    <td>

                                        {animal.nombre}

                                    </td>


                                    <td>

                                        {animal.rfid}

                                    </td>


                                    <td>

                                        {animal.sexo}

                                    </td>


                                    <td>

                                        {animal.raza}

                                    </td>


                                    <td>

                                        {animal.peso} Kg

                                    </td>


                                    <td>

                                        <span className="estado">

                                            {animal.estado}

                                        </span>

                                    </td>


                                    <td>


                                        <button

className="icono"

onClick={()=>{

setAnimalSeleccionado(animal);

setModo("ver");

}}

>

<FaEye/>

</button>


                                        <button

className="icono editar"

onClick={()=>{

setAnimalSeleccionado(animal);

setModo("editar");

}}

>

<FaEdit/>

</button>


                                    </td>


                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            {

animalSeleccionado && (

<div className="detalleAnimal">

<h2>

{

modo==="ver"

?

"Información del Animal"

:

"Editar Animal"

}

</h2>

<p>

<b>Código:</b>

{animalSeleccionado.codigo}

</p>

{

modo==="editar"

?

<>

<label>

RFID

</label>

<input

type="text"

placeholder="Ingrese el RFID"

value={animalSeleccionado.rfid}

onChange={(e)=>

setAnimalSeleccionado({

...animalSeleccionado,

rfid:e.target.value

})

}

/>

<label>

Nombre

</label>

<input

type="text"

value={animalSeleccionado.nombre}

onChange={(e)=>

setAnimalSeleccionado({

...animalSeleccionado,

nombre:e.target.value

})

}

/>

<label>

Sexo

</label>

<select

value={animalSeleccionado.sexo}

onChange={(e)=>

setAnimalSeleccionado({

...animalSeleccionado,

sexo:e.target.value

})

}

>

<option>

Macho

</option>

<option>

Hembra

</option>

</select>

<label>

Raza

</label>

<input

type="text"

value={animalSeleccionado.raza}

onChange={(e)=>

setAnimalSeleccionado({

...animalSeleccionado,

raza:e.target.value

})

}

/>

<label>

Peso (Kg)

</label>

<input

type="number"

value={animalSeleccionado.peso}

onChange={(e)=>

setAnimalSeleccionado({

...animalSeleccionado,

peso:e.target.value

})

}

/>

<label>

Estado 

</label>

<select

value={animalSeleccionado.estado}

onChange={(e)=>

setAnimalSeleccionado({

...animalSeleccionado,

estado:e.target.value

})

}

>

<option>

Activo

</option>

<option>

Enfermo

</option>

<option>

Vendido

</option>

</select>

<button

className="btnGuardarCambios"

onClick={()=>{

const animales =

JSON.parse(

localStorage.getItem("animales")

) || [];

const nuevos =

animales.map(a=>

a.id===animalSeleccionado.id

?

animalSeleccionado

:

a

);

localStorage.setItem(

"animales",

JSON.stringify(nuevos)

);

alert(

"Animal actualizado correctamente"

);

window.location.reload();

}}

>

Guardar cambios

</button>

</>

:

<>
    

<p>

<b>Nombre:</b>

{animalSeleccionado.nombre}

</p>

<p>

<b>RFID:</b>

{animalSeleccionado.rfid}

</p>

<p>

<b>Sexo:</b>

{animalSeleccionado.sexo}

</p>

<p>

<b>Raza:</b>

{animalSeleccionado.raza}

</p>

<p>

<b>Peso:</b>

{animalSeleccionado.peso} Kg

</p>

<p>

<b>Estado:</b>

{animalSeleccionado.estado}

</p>

</>

}

</div>

)

}

        </div>
    </>
    )       
    }
