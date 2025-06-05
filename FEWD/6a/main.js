const arithematic = require('.\arithematic');
const fs=require('fs');

const a=10;
const b=5;

const sum=arithematic.add(a,b);
const difference=arithematic.subtract(a,b);
const product=arithematic.multiply(a,b);
const quotient=arithematic.divide(a,b);

console.log(`Sum:${sum}`);
console.log(`Differenec:${difference}`);
console.log(`Product:${product}`);
console.log(`Quotient:${quotient}`);

const results=`
    Sum:${sum}
    Differenec:${difference}
    Product:${product}
    Quotient:${quotient}
`;
fs.writeFile('results.txt',results,(err) =>{
    if(err){
    console.error('Error writing the file',err);
}
else{
    console.log('Results return to results.txt');
});
fs.readFile('results.txt','utf-8',(err,data) =>{
    if(err){
    console.error('Error reading the file',err);
}
else{
    console.log('Contents of results.txt');
    console.log(data);
}
});





