'Use Strict';

//Fetch y peticiones a servicios apis rest

fetch('https://reqres.in/api/users')
    .then(data => data.json()) //capturar datos funciòn de fecha convierte datos a json y hace return
    .then(users => {
        usuarios = users.data; //guardar datos
        console.log(usuarios);
        
        usuarios.map((users, i) => {
            let nombre = document.createElement('h2');
            
        })
    })