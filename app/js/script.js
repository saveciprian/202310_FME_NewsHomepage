let navMenu = document.getElementById("navMobile");
let mobileColorOverlay = document.getElementById("mobileOverlay"); 
let slidingMenu = document.getElementById("slidingMenu");
let links = document.getElementsByTagName('a');
let burgerMenu = document.getElementById("burger");
let burgerChildren = burgerMenu.children;

let animationRunning = false;


document.getElementById("burger")
    .addEventListener('click', function(event){
        
        if(animationRunning)
        {
         return;
        }
            
        if(navMenu.classList.contains("expanded__open"))
        {
            closeMobileMenu();
        }else{
            animationRunning = true;
            
            navMenu.classList.add("expanded__open");
            navMenu.classList.remove("expanded__closed");
            
            burgerMenu.classList.remove("burger__close");
            resetBurgerAnimation();
            burgerMenu.classList.add("burger__open");
            
            mobileColorOverlay.classList.remove("hideOverlay");
            mobileColorOverlay.classList.add("showOverlay");
        }
});

function closeMobileMenu(){
    animationRunning = true;
    
    mobileColorOverlay.classList.remove("showOverlay");
    mobileColorOverlay.classList.add("hideOverlay");

    burgerMenu.classList.remove("burger__open");
    resetBurgerAnimation();
    burgerMenu.classList.add("burger__close");
    
    navMenu.classList.remove("expanded__open");
    navMenu.classList.add("expanded__closed");
}

function resetBurgerAnimation(){
    // void burgerMenu.offsetHeight;
    // for(let i = 0; i < burgerChildren.length; i++)
    // {
    //     void burgerChildren[i].offsetHeight;
    // }

    burgerMenu.style.animation = 'none';
    burgerMenu.offsetHeight; /* trigger reflow */
    burgerMenu.style.animation = null; 

}

mobileColorOverlay.addEventListener('click', function(e){
    if(animationRunning) return;

    if(navMenu.classList.contains("expanded__open"))
    {
        closeMobileMenu();
    }
});


for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(e){
        if(animationRunning) return;
    
        if(navMenu.classList.contains("expanded__open"))
        {
            closeMobileMenu();
        } 
    });
}

navMenu.addEventListener("animationstart", function(event) {
    
    if(event.animationName === "openMenu")
    {
        slidingMenu.style.visibility = "visible";
    }
});

navMenu.addEventListener("animationend", function(event) {
    animationRunning = false;

    if(event.animationName === "closeMenu")
    {
        slidingMenu.style.visibility = "hidden";
    }
});
    