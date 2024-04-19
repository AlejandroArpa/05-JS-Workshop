import validate from '../seccion1/Reto2.js';

let dailyBudget, eatOutside, buyBooks, saveMoney;
let flag = true;

while(flag){
    dailyBudget = Number (prompt("Ingresa el presupuesto diario"));
    eatOutside = Number (prompt("Cuanto vas a gastar comiendo afuera?:"));
    buyBooks = Number (prompt("Cuanto vas a gastar en libros?"));
    saveMoney = Number (prompt ( "Cuanto deseas ahorra?"));
    if(validate(dailyBudget) && validate(eatOutside) && validate(buyBooks) && validate(saveMoney) ){
        flag = false;
    }
    else{
        alert("Datos no numericos");
    }
}
const available = dailyBudget - saveMoney;
if( available >= eatOutside || available >= buyBooks ){
    if(available >= eatOutside + buyBooks){
        console.log("Puedes hacer ambas cosas")
    }
    else if(available >= eatOutside){
        console.log("Puedes comer afuera")
    }
    else if(available >=buyBooks){
        console.log("Puedes comprar libros")
    }
}
else{
    alert("no alcanza para nada");
}
