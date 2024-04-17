import validate from "./Reto2.js";


const articles = [];
const articlesCould = [];
let f1 = true;
let f2 = true;

let initialBudget, housingCost, transportCost, foodCost, umbral;

while(f1){
    initialBudget = Number (prompt("Ingrese su presupuesto inicial"));
    housingCost = Number (prompt("Precio de alojamiento"));
    transportCost = Number (prompt("Precio de transporte"));
    foodCost = Number (prompt("Precio de comida"));
    umbral = Number (prompt("Imprevistos"));
    if(validate(initialBudget) && validate( housingCost ) && validate( transportCost ) && validate( foodCost ) && validate( umbral )){
        f1 = false;
    }
    else{
        alert("informacion incorrecta");
    }
}


while(f2 && !f1){
    
    let name = prompt("Nombre del articulo: ");
    let price = Number (prompt("Precio del articulo: "));
    if(validate( price )){
        const article = {
            'name': name,
            'price': price,
        }
        articles.push(article);
    }
    else{
        alert("informacion incorrecta");
    }
    f2 = confirm("Desea agregar otro articulo a la lista?");
}

while(!f1 && !f2){
    const excedd = initialBudget - housingCost - transportCost - foodCost - umbral;
    if( excedd > 0 ){
        if(articles.length >= 1){
            articles.forEach(article => {
                if( article.price <= excedd ){
                    articlesCould.push(article);
                }
            });
            let cheapArticle = {
                'name': "",
                'price': 100,
            }
            articlesCould.forEach(element => {
                if( cheapArticle.price > element.price ){
                    cheapArticle = element;
                }
            });
            console.log(`El articulo mas barato es: ${cheapArticle.name}`)
            
        }
        else{
            alert("si tienes plata pero no articulos :/")
        }
    }
    else{
        alert("No te alcanza para nada más, de hecho vas corto")
    }
    f1 = true;
}




