

//  var myName = prompt("Please Enter your Name:");

//  console.log("Hello" , myName); 

 document.getElementById("mybtn").onclick = function(){
    var myName = document.getElementById("mytext").value;

    console.log("Hello" , myName);

    let div =document.getElementById("output");
    let h1=document.createElement("h1");
    h1.textContent="Hello " + myName + " Welcome Back";
    const list = h1.classList;
    list.add("design");
    div.appendChild(h1);

 }