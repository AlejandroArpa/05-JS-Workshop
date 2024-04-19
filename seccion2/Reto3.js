import validate from "../seccion1/Reto2.js";
const articles = [];
const articlesNeeded = [];
const articlesVarious = [];
let weather, packageSpaces, weightLimit;
let f1 = true;
let f2 = true;
let f3 = true;
let name, weatherType,storageItem, essential, article;

while( f1 ){
    weather = prompt("Ingrese alguna de las dos opciones (soleado, lluvioso)");
    packageSpaces = Number ( prompt( "Ingrese la cantidad de espacio disponible (0 - 100) " ) );
    weightLimit = Number( prompt("Cual es la cantidad de peso maximo?") );
    (weather === 'soleado' || weather === 'lluvioso') &&  validate(packageSpaces) && validate(weightLimit) ? 
        f1 = false 
        : alert( "Datos incorrectos" );
}

while( !f1 && f2 ){
    name = prompt( "Ingrese el nombre del articulo: " );
    weatherType =  confirm( "Es un producto para sol?" );
    storageItem = Number( prompt( "Ingresa cuanto espacio con respecto a la maleta va a ocupar? debe ser un valor entre 1-99" ) );
    essential = confirm( "Es un producto esencial?" ); 
    validate(storageItem) ? 
        article = { "name" : name, "climaSoleado" : weatherType, "volumen" 
        : storageItem, "esencial?" : essential } : alert( "Datos errados" );
    Object.keys(article).length > 0 ? 
        articles.push(article)
        : null
    f2 = confirm("Desea agregar otro articulo?")
}

if(f3 && !f2){
    articles.forEach(article =>{
        if(weather==="soleado" && article.weatherType){
            if(article.essential){
                articlesNeeded.push(article);
            }
            else{
                articlesVarious.push(article)
            }
        }

    })
    articlesNeeded.forEach(article =>{
        if(packageSpaces >= article.storageItem){
            packageSpaces = packageSpaces - article.storageItem;
            console.log(`Has agregado el siguiente articulo ${article}`);
        }
    })
    articlesVarious.forEach(article => {
        if(packageSpaces >= article.storageItem){
            packageSpaces = packageSpaces - article.storageItem;
            console.log(`Has agregado el siguiente articulo ${article}`);
        }
    })
}