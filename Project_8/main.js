var elem=document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1;
    
    })
    
    val.addEventListener("mousemove",function(dets){
        
        var y=val.getBoundingClientRect().y;
         val.childNodes[3].style.left= (dets.x) + "px";
         val.childNodes[3].style.top= (dets.y - y-5)+ "px";
    })

    
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    
    })
})