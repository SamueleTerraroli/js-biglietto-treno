let età = parseInt(prompt ('indica la tua età'));
console.log("Età:", età ,"Anni");
let distanza = parseInt(prompt ('Quanti km devi percorrere?'));
console.log("Distanza:", distanza,"Km");



//debug
/*let età = 40;
console.log("Età:", età ,"Anni");
let distanza = 50;
console.log("Distanza:", distanza,"Km");
*/

let price = (21/100) * distanza;
const discountUnder = 20;
const discountOver = 40;

if(età < 18) {
    price = price * (1 - discountUnder / 100);
    console.log("Prezzo:",price.toFixed(2),"€");   
} else if (età >= 60 ) {
    price = price * (1 - discountOver / 100);
    console.log("Prezzo:",price.toFixed(2),"€"); 
} else {
    price = price;
    console.log("Prezzo:",price.toFixed(2),"€"); 
}