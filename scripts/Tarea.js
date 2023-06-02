



class Tarea{
    constructor(tarea,status){
        this.tarea = tarea;
        this.status=status;
    }


    render(){
        const urlDelete = 'http://localhost:8080/tasks/delete/'+this.tarea.id;
        const urlMover = 'http://localhost:8080/tasks/'+this.tarea.id;
        const urlMoverDer = urlMover+'/state/'+(this.status+1);
        
        const urlMoverIzq = urlMover+'/state/'+(this.status-1);

        let container = document.createElement('div');
        if(this.status==1){
            container.classList.add('tareaToDoCard');
        }
        if(this.status==2){
            container.classList.add('tareaDoingCard');
        }
        if(this.status==3){
            container.classList.add('tareaDoneCard');
        }
        container.style.width = '200px';
        container.style.height = '200px';

        let body = document.createElement('div');
        body.classList.add('card-body');

        let title = document.createElement('h5');
        title.classList.add('card-title');

        let text = document.createElement('p');
        text.classList.add('card-text');

        let eliminar = document.createElement('a');
        eliminar.classList.add('btn');
        eliminar.classList.add('btn-primary');
        eliminar.setAttribute('id', 'eliminarBTN');

        let moverDer = document.createElement('a');
        moverDer.classList.add('btn');
        moverDer.classList.add('btn-primary');
        moverDer.setAttribute('id', 'moverDerBTN');

        let moverIzq = document.createElement('a');
        moverIzq.classList.add('btn');
        moverIzq.classList.add('btn-primary');
        moverIzq.setAttribute('id', 'moverIzqBTN');
        
       
        container.appendChild(body);
        body.appendChild(title);
        body.appendChild(text);
        body.appendChild(eliminar);
        if(this.status==1){
            body.appendChild(moverDer);
            moverDer.textContent = "Der";
        }
        if(this.status==2){
            body.appendChild(moverDer);
            body.appendChild(moverIzq);
            moverDer.textContent = "Der";
            moverIzq.textContent = "Izq";
        }
        if(this.status==3){
            body.appendChild(moverIzq);
            moverIzq.textContent = "Izq";
        }
        

        title.textContent = this.tarea.title;
        text.textContent = this.tarea.description;
        eliminar.textContent = "Eliminar";
        
        eliminar.addEventListener('click', e => {
            e.preventDefault();
            fetch(urlDelete, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
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
        })

        moverDer.addEventListener('click', e => {
            e.preventDefault();
            fetch(urlMoverDer, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
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
        })
        moverIzq.addEventListener('click', e => {
            e.preventDefault();
            fetch(urlMoverIzq, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
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
        })
        
        return container;
    }
}