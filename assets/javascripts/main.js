window.addEventListener("load",initEvents);
function initEvents(){
    const toTop=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
    document.getElementById("ham-bar").onclick = function(){
        document.getElementById("ham-bar").style.display = "none";
        document.getElementById("cross").style.display = "block";
        document.getElementById("popup").style.display = "block";
    }  
    document.getElementById("cross").onclick = function(){
        document.getElementById("ham-bar").style.display = "block";
        document.getElementById("cross").style.display = "none";
        document.getElementById("popup").style.display = "none";
    }
    function myFunction(x) {
        if (x.matches) { 
            document.getElementById("popup").style.display = "flex";
        } else {
            document.getElementById("popup").style.display = "none";
            

        }
      }
    var x = window.matchMedia("(min-width: 768px)")
myFunction(x) 
x.addListener(myFunction) 
document.querySelector("#head-trans").style.transform = "translatex(0%)";
document.querySelector("#head-trans").style.opacity = "1";
document.querySelector("#head3-trans").style.transform = "translatex(0%)";
document.querySelector("#head3-trans").style.opacity = "1";
document.getElementById("div-btn").style.transform = "translatex(0%)";

}
    

