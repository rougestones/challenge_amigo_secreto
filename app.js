
// Lista donde se almacenarán los nombres de los participantes

let amigos = [];

// Agregar un nuevo amigo a la lista
function agregarAmigo() {
    let campo = document.getElementById("amigo"); // Campo de texto
    let nombre = campo.value.trim(); 

    if (nombre === "") { // Si no se escribió nada
        alert("Ingresa un nombre antes de continuar.");
        return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) { // Si hay caracteres inválidos
        alert("Solo se permiten letras y espacios.");
        return;
    }
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) { // Si ya existe
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // Guarda
    campo.value = ""; // Limpia campo
    mostrarListaAmigos(); // Refresca la lista en pantalla
}

// Muestra la lista actual
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Vacia lista

    amigos.forEach(function(amigo) {
        let li = document.createElement("li"); // Crea elemento
        li.textContent = amigo;
        lista.appendChild(li); // Añade a la lista
    });
}

// Escoge un amigo al azar
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");

if(amigos.length=== 0){
        alert('No hay amigos para sortear');
        return
    }

    if (amigos.length < 2) { // No se puede con menos de 2 participantes
    alert('Agrega al menos dos nombres');
        return;
}   
else
{   
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>Amigo secreto: <strong>${amigoSeleccionado}</strong></li>`;
    document.getElementById("listaAmigos").innerHTML = ""; // Vacia la lista
    amigos = []; // Se reinicia para un nuevo sorteo
    }
}