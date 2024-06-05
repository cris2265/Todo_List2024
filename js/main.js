import { tareas } from './data_todo.js' 

function cargar_tareas (){
    let cuadros_tareas = document.querySelector(".list_tareas")

    tareas.forEach((cada_tarea)=> {

        let div_tarea =document.createElement("div")
        div_tarea.classList.add("div_tareas")
        if (cada_tarea.estado){
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[/]</div>
            `;
        }else {
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[X]</div>
            `;
        }

        cuadros_tareas.appendChild(div_tarea)
    })
}

cargar_tareas()

function cargar_botones () {
    let caja_btn = document.querySelector(".botones");

    caja_btn.innerHTML = `<div class="btn_mas"> + </div>`
}

cargar_botones()

function cargar_formulario () {
    let ventana_formulario = document.querySelector(".formulario")
    ventana_formulario.classList.add("activar_b")
    ventana_formulario.innerHTML = `

    <div class="div_controles">
        <div class="btn_cerrar">
            x
        </div>
    </div>



<div class="div_formulario">
    <input type="txt">
    <select id="categoria" name="categoria">
        <option value="perro">Categoría</option>
        <option value="perro">Casa</option>
        <option value="gato">Universidad</option>
        <option value="pajaro">Trabajo</option>
    </select>
</div>

<div class="crear">Crear</div>
    `
}


//programacion del boton 
let btn_formulario = document.querySelector(".btn_mas")
btn_formulario.addEventListener("click", cargar_formulario)