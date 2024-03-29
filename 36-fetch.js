'Use Strict';

//Fetch y peticiones a servicios apis rest


var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
    
function getUsers(){
    return fetch('https://reqres.in/api/users'); //promesa
 }
 
 
 function getJanet(){
    return fetch('https://reqres.in/api/users/2'); //promesa
 }

    getUsers()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    });


    function listadoUsuarios(usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h2');
            
            nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = "none";
        });
    }

    function mostrarJanet(user){
            let nombre = document.createElement('h4');
            let avatar = document.createElement('img');
            
            nombre.innerHTML = user.first_name + " " + user.last_name;
            avatar.src = user.avatar; 
            avatar.width = '150'; 

            div_janet.appendChild(nombre);
            div_janet.appendChild(avatar);

            document.querySelector("#janet .loading").style.display = "none";
        }

    