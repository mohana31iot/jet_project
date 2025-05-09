let ids=document.getElementById("first");
 console.log(ids);
//  first.innerText="Dom-Document Object Model";
let get=document.getElementById("get");
console.log(get.innerText);
let firs=document.getElementsByClassName("header");
console.log(firs[0].textContent);
console.log(firs[1].textContent);
let first=document.querySelector(".a");
console.log(first.innerText);
let Second=document.querySelectorAll(".a");
console.log(Second[1].innerText);
console.log(Second[0].innerText);
let third=document.querySelectorAll("#b");
console.log(third[0].innerText);
let thir=document.querySelectoor("#b");
cconsole.log(thir.innerText);
let header=document.getElementsByTagName("p");
console.log(header[0].innerText);

let container=document.getElementById("container");
let newpara=document.createElement("p");
newpara.innerText="This is new paragraph!";
container.appendChild(newpara);

// let containers=doucment.getElementById("demo");
// let itemremove=document.getElementById("d");
// container.removeChild(itemremove);

let a=document.getElementById("innerHTML");
a.innerHtml="<p>New <Strong> content </strong> Here!</p>";

let element=document.getElementById("demo");
console.log(element.innerText);
console.log(element.textContent)

