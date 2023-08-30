

var arr=[
    {
        dp:"https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80",
        story:"https://images.unsplash.com/photo-1600026453239-1d702d3e5e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story:"https://images.unsplash.com/photo-1636007596622-90bf5679f5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story:"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1621604474819-5380e727ee2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story:"https://images.unsplash.com/photo-1600026453284-65cc5a6b7aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1605296866985-34ba3c0b527b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story:"https://images.unsplash.com/photo-1583454155184-870a1f63aebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    }
];

var storyian= document.querySelector("#stroyian");
var clutter="";
arr.forEach(function(elem,idx){
   clutter += `<div class="story">
   <img id="${idx}" src=${elem.dp} alt="">
  </div>`
});

storyian.innerHTML = clutter;
var fullScreen = document.querySelector("#full-screen");
storyian.addEventListener("click",function(dets){
    fullScreen.style.display="block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        fullScreen.style.display="none";
    },3000)
})


var contain = document.querySelector("#container");

var icon = document.querySelector("i");

contain.addEventListener("dblclick",function(){
    icon.style.transform = "translate(-50%,-50%) scale(1)"
    icon.style.opacity=0.8;
    // icon.style.color="red";

    setTimeout(function(){
        icon.style.opacity=0;
    },1000)

    setTimeout(function(){
        icon.style.transform = "translate(-50%,-50%) scale(0)"
    },1500)
});