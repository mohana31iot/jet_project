let form=document.getElementById("myform");
let msg=document.getElementById("message");
form.addEventListener("submit",
    function(event){
        event.preventDefault()
        const name=document.getElementById("name").Value;
        console.log(name);
        const email=document.getElementById("email").Value;
        console.log(email);
        if(name===" "   || email===" ")
        {
            msg.textContent="Please fill in all the fields";
        }
        else{
            msg.textContent="Form submitted successfully";
            msg.style.color="Green";
        }
    }
);
// let btn=document.getElementById("btn");
// console.log(btn[0]);
// btn.addEventLister("click",function(){
// alert("Button has been successfully clicked");
// btn.style.backgroundColor="Green";
// btn.style.color="white";
// })

    