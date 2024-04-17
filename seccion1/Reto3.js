import validate from "./Reto2.js";

const articles = [];
let flag = true;
let initialBudget, housingCost, transportCost, foodCost

while(flag){
    initialBudget = Number (prompt("Ingrese su presupuesto inicial"));
    housingCost = Number (prompt("Precio de alojamiento"));
    transportCost = Number (prompt("Precio de transporte"));
    foodCost = Number (prompt("Precio de comida"));
    if(validate('number', initialBudget) && validate('number', housingCost) && validate('number', transportCost) && validate('number', foodCost)){
        flag = false;
    }
    else{
        alert("informacion incorrecta");
    }
}

flag = true;

while(flag){
    flag = confirm("Desea agregar articulos a la lista?");
    if(flag === false){break}
    let name = prompt("Nombre del articulo: ");
    let price = Number (prompt("Precio del articulo: "));
    if(validate("string", name) && validate("number", price)){
        const article = {
            'name': name,
            'price': price,
        }
        articles.push(article);
    }
    else{
        alert("informacion incorrecta");
    }
}

if(!articles){
    console.log("");
}


