
const suvenirs = [];
let flag = true;

const validate = (value, type = 'number') => typeof value ===  type && !Number.isNaN(value);


function addSuvenir(){

    while(flag){
        let name = prompt("Ingrese el nombre del suvenir");
        let cost = prompt("Ingrese el costo del suvenir");
        cost = Number(cost);
        let available = confirm("Está disponible?");
        if ( validate(cost) ){
            const suvenir = {
                'name' : name,
                'cost' : cost,
                'available' : available
            }
            suvenirs.push(suvenir);
            console.log(suvenirs);
        }
        else{
            alert("Datos incorrectos");
        }
        flag= confirm("Desea agregar otro suvenir");
    }
    console.log(suvenirs)
}
// addSuvenir(); Descomentar esta linea para ejecutar el reto2


export default validate;