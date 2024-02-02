let tareas = [
    {
        estado : true,
        id: 1,
        texto: "Quitar todos los tornillos", 
    },
    {
        estado : false,
        id: 2,
        texto: "Levantar la tapa",
    },
    {
        estado : true,
        id: 3,
        texto: "Desconectar la bateria",
    },
    {
        estado : false,
        id: 4,
        texto: "Identificar Componentes",
    }
]
function cargar_tareas (){
    let cuadros_tareas = document.querySelector(".root")

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