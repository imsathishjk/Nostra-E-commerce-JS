var popup = document.querySelector(".popup")
var popclose = document.getElementById("pop-close")
popclose.addEventListener("click", function(){
    popup.style.display = "none"
    event.preventDefault()
})

// Sidebar navigation
var menuicon=document.getElementById("menu-icon")
var sidenavbar = document.querySelector(".sidebar-nav")
var navclose = document.getElementById("navclose")
menuicon.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
    event.preventDefault()
})

document.getElementById("navclose").addEventListener("click",()=>{
    document.querySelector(".sidebar-nav").style.marginLeft = "-60%"
    event.preventDefault()
})

// slider


var sliderleft = document.getElementById("slider-left-activate")
var sliderright =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0


sliderright.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleft.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)

// like button change
var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        event.preventDefault()
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="img/icons/redheart.png"
        }
        else{
            e.target.src="img/icons/blackheart.png"
        }
    })
})

