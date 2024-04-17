const energy = Number (prompt("ingresa tu nivel de energia hoy: (0 - 100) "));
const wheater = prompt("Como está el clima hoy?: ");
const work = Number(prompt("Cual es tu carga laboral hoy?: (0 - 100) "));

if(!energy && !wheater){
    console.log("No salir a correr");
}
else if(!energy && work){
    console.log("Tomarse el dia libre")
}
else if(!wheater && energy){
    console.log("Trabajar en proyectos personales");
}
