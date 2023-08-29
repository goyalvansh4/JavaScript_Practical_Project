var isStatus = document.querySelector("h5");

var btn = document.querySelector("#add");
var check=0;
btn.addEventListener("click",function(){
    if(check==0){
        isStatus.innerHTML = "Connected";
        isStatus.style.color="green";
        btn.innerHTML = "Remove Friend";
        check=1;
    }
    else{
        isStatus.innerHTML = "Not Connected";
        isStatus.style.color="red";
        btn.innerHTML = "Add Friend";
        check=0;
    }
})
// var rmFriend = document.querySelector("#remove");
// rmFriend.addEventListener("click",function(){
//     isStatus.innerHTML = "Not Connected";
//     isStatus.style.color="red";
// })

