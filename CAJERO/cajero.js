var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33' },
    { nombre: "Maui", saldo: 67, password: '123' }];

let name = "";
let password = "";    

function getData() {
name = document.getElementById("name").value;
password = document.getElementById("password").value;

}

function login(form) {
getData()
let result = cuentas.find(cuenta => name === cuenta.nombre);

if (result === undefined) {
alert("Error de Usuario")
return;

}else if (result.password !== password){
alert("Error de contraseña")
return;
}
localStorage.setItem("cuenta", JSON.stringify(result));
location ="principal.html";
}        
