
const suvenirs = [];
let flag = false;

const validate = (type, value) => typeof value === type && !Number.isNaN(value);


if(confirm("Desea agregar un suvenir")){
    let name = prompt("Ingrese el nombre del suvenir");
    let cost = prompt("Ingrese el costo del suvenir");
    cost = Number(cost);
    let available = confirm("Está disponible?");
    flag = validate('string', name) && validate('number', cost) && validate('boolean', available);
    if (flag=== true){
        const suvenir = {
            'name' : name,
            'cost' : cost,
            'available' : available
        }
        suvenirs.push(suvenir)
        console.log(suvenirs)
    }
}

if(confirm("Desea agregar un suvenir")){
    let name = prompt("Ingrese el nombre del suvenir");
    let cost = prompt("Ingrese el costo del suvenir");
    cost = Number(cost);
    let available = confirm("Está disponible?");
    flag = validate('string', name) && validate('number', cost) && validate('boolean', available);
    if (flag=== true){
        const suvenir = {
            'name' : name,
            'cost' : cost,
            'available' : available
        }
        suvenirs.push(suvenir)
        console.log(suvenirs)
    }
}

if(confirm("Desea agregar un suvenir")){
    let name = prompt("Ingrese el nombre del suvenir");
    let cost = prompt("Ingrese el costo del suvenir");
    cost = Number(cost);
    let available = confirm("Está disponible?");
    flag = validate('string', name) && validate('number', cost) && validate('boolean', available);
    if (flag=== true){
        const suvenir = {
            'name' : name,
            'cost' : cost,
            'available' : available
        }
        suvenirs.push(suvenir)
        console.log(suvenirs)
    }
}

if(confirm("Desea agregar un suvenir")){
    let name = prompt("Ingrese el nombre del suvenir");
    let cost = prompt("Ingrese el costo del suvenir");
    cost = Number(cost);
    let available = confirm("Está disponible?");
    flag = validate('string', name) && validate('number', cost) && validate('boolean', available);
    if (flag=== true){
        const suvenir = {
            'name' : name,
            'cost' : cost,
            'available' : available
        }
        suvenirs.push(suvenir)
        console.log(suvenirs)
    }
}

if(confirm("Desea agregar un suvenir")){
    let name = prompt("Ingrese el nombre del suvenir");
    let cost = prompt("Ingrese el costo del suvenir");
    cost = Number(cost);
    let available = confirm("Está disponible?");
    flag = validate('string', name) && validate('number', cost) && validate('boolean', available);
    if (flag=== true){
        const suvenir = {
            'name' : name,
            'cost' : cost,
            'available' : available
        }
        suvenirs.push(suvenir)
        console.log(suvenirs)
    }
}


