// let & const
let a=10;
const b=30;
console.log(a);
a=20
console.log(a)
console.log(b)
// Arrow function
function add(x,y)
{
    return (x+y);

}
console.log(add(5,6));
// Template Literals
let name="Ajith";
let greeting=`Hello,${name}`;
console.log(greeting);
// Default Parameters
function Greet(name="Guest")
{
    console.log(`Hello,${name}`);
}
Greet();
Greet("Virat");
// Destructuring Assignment
// Extract values from arrays or objects
let[c,d]=[10,20];
let person={Name:"Virat",age:25};
let{Name,age}=person;
console.log(Name,age);
// Spread Operator(...)Used for array & Object
// we can take 1st variable value in the 2nd one
let arr1=[1,2,3,4];
let arr2=[...arr1,5,6,7];
console.log(arr2);

let obj1 ={name:"Rohit"};
let obj2 ={...obj1,age:25};
console.log(obj2);

// 1.Map
let marks=[50,60,70,45];
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]+10);
}
// Filter
let numbers=[1,2,3,4,5,6,7,8,9,10];
// keeps only even numbers
let odd=numbers.filter(n=>n%2!==0);
console.log(odd);
let names=["Ram","John","Priya","AI"];
// more than four letter names

let longnames=names.filter(n=>n.length>=4);
console.log(longnames);

// 3.Reduce()
let Reducenum=[2,3,4];
let product =Reducenum.reduce((a, b)=>a+b,0);
console.log(product);
// a=accumlator=>stores the result
// b=Current vaule in the array
// 0 is the inital vaule of the accumulator
// a=is a accumulator =>no vaule 
// assigned =0
// 0+b(value2)=>0+2=2
// 2+b(value3)=>2+3=5
// 5+b(vaule4)=>5+4=9
let Items=Reducenum.reduce((x,y)=>x+y,1);
// x=accumulator => stores the result
// assigned value=1
// 1+2=3
// 3+3=6+6+4=10
console.log(Items);

// 4.foreach
let Playersname=["Dhoni","Virat","Rohit"];
Playersname.forEach((n,i)=>{
    console.log(`${i+1}.Hello,${n}!`)
})

