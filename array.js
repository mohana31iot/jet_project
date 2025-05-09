let a="apple";
console.log(a)
//Array[]
let fruits=["Apple","Banana","orange"];
console.log(fruits[2])
//Push
fruits.pop();
console.log(fruits);
//unshift()
fruits=["Apple","Banana","orange"];
fruits.unshift("grapes");
console.log(fruits);
//shift()
fruits.shift();
console.log(fruits);
//splice() Add/Delete Anywhere & Replace
let colors=["red","green","blue"];
colors.splice(1,2);
console.log(colors);
colors.splice(2,0,"yellow");
console.log(colors);
colors.splice(1,2,"purple","violet");
//reverse()reverse the array
let Nums=[1,2,3,4,5,6,7,8,9,10];
Nums.reverse();
console.log(Nums);
// join() converts Array to string
let letters=["a","b","c"];
let result=letters.join("-")
console.log(result)
 result=letters.join(",");
console.log(result);
//split() convert s string to array
let str="hello world";
let words = str.split(" ");
console.log(words);
words=str.split("");
console.log(words);
//merge 2 arrays-using concat()
let arr1 = [1,2];
let arr2 = [3,4];
let merged = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(merged);
//merge 2 arrays - using spread operator...(syntax will be easy than concat.)
 arr1 = [1,2];
 arr2 = [3,4];
 merged =[...arr1,...arr2];
console.log(merged);
//object{}
let person ={name:"john", age:20,city:"chennai"};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
//Object.keys(obj);
const obj={a:1,b:2,c:3};
Object.seal(person);
console.log(Object.keys(obj));
//object.values(obj)
//obj={a:1,b:2,C:3};
console.log(Object.values(obj));
//Object.entries(obj)
console.log(Object.entries(obj));
//Object.is Sealed(obj)
console.log(Object.isSealed(person));
//Function - Named Function
function greet(){
    console.log('Hello');
}
greet();
//Anonymous Function
setTimeout(function(){
    console.log('I run after 1 second!');
},1000);
// Arrow function
const mohi=()=>{
    console.log('helo!');
}
// IIFE immediately invoked function expression
(function(){
    console.log('I run immediately!');
})();
// Callback function

function Devi(callback){
    callback();
}
Devi(function(){
    console.log('hello from the callback!');});
    // recursive Function
    function countDown(number){
    if(number>0){
        console.log(number);
        countDown(number-1);
    }
;    }
countDown(3);
// For..of array string array values
fruits=["apple","banana","orange"];
console.log(fruits);
for(let fruit of fruits){
    console.log(fruit);
}
// For..in Object Object keys
person={
    a:"ram",b:20,c:"chennai"
}
console.log(person);
for(let key in person){
    console.log(person[key]);
}