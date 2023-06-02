const titulo = document.getElementById('Titulo');
const descripcion = document.getElementById('Descripcion');
const addBTN = document.getElementById('AddBTN');
localStorage.clear();


async function getTareasToDo(){
    let response = await fetch("http://localhost:8080/tasks/state/1",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    });
    let json = await response.json();
    console.log(json);

    json.forEach(tareas => {
        let tarea = new Tarea(tareas,1).render();
        console.log(tarea);
        ToDo.appendChild(tarea);
    });
}
async function getTareasDoing(){
    let response = await fetch("http://localhost:8080/tasks/state/2",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    });
    let json = await response.json();
    console.log(json);

    json.forEach(tareas => {
        let tarea = new Tarea(tareas,2).render();
        console.log(tarea);
        ToDo.appendChild(tarea);
    });
}
async function getTareasDone(){
    let response = await fetch("http://localhost:8080/tasks/state/3",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    });
    let json = await response.json();
    console.log(json);

    json.forEach(tareas => {
        let tarea = new Tarea(tareas,3).render();
        console.log(tarea);
        ToDo.appendChild(tarea);
    });
}
getTareasToDo();
getTareasDoing();
getTareasDone();



const crearTarea = (event) => {

    event.preventDefault();

    let logRequest = {
        title: titulo.value,
        description: descripcion.value,
    };
    console.log(JSON.stringify(logRequest));


    fetch('http://localhost:8080/tasks/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(logRequest)
    })
    .then(response => {
        console.log(response); // Imprime la respuesta HTTP en la consola
        
        return response.json();
    })
    .then(data => {
        console.log(data); // Imprime la respuesta en formato JSON en la consola
        

    })
    .catch(error => {
        console.error(error); // Imprime cualquier error en la consola
    });
};

addBTN.addEventListener('click', crearTarea);



