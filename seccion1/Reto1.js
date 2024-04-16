
const costPerDay = 120000;
const destination = prompt("Ingrese el destino por favor:");
let days , budget, costTravel;

    

days = prompt("Ingrese la cantidad de dias del viaje");
budget = prompt("Ingrese presupuesto del viaje");   
costTravel = costPerDay * days;
if( budget >= costTravel ){
    alert("Dinero suficiente");
    console.log("Dinero suficiente")
    flag = 1;
}
else{
    alert("Dinero insuficiente ");       
    console.log("Dinero insuficiente")
    
}