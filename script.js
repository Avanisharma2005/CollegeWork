console.log("hello world")

let a=20; // cannot redeclare variable 
console.log(a)
var b=3;    // can redeclare variable
var b=10;
console.log(b)
const c=32;// cannot redeclare

console.log(c);

// alert("Warning !")
// prompt("check karo ji")
// confirm("hahahhah")

let num;
for(num=1;num<=10;num++){
    if(num%2==0)
        console.log(num);
}
let x=1;
switch(x){
    case 1: console.log("hello")
    break;
    case 2: console.log("how are you")
}
let i;
for(i=1;i<=10;i++){
    
     if(i==2){
        continue;
    }
    else{
        console.log(i)
    }
} 

const cars = ["Saab", "Volvo", "BMW"]
console.log(cars[1])
console.log(cars.length)

var arr=["harsh",1,true];
for(let index in arr)
    console.log(arr[index])

for(let ele of arr)
    console.log(ele)

var str="hello world";
for(let index in str)
    console.log(index)  