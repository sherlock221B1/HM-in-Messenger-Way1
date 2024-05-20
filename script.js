const topMenuLogoContainerTag = document.querySelector(".topMenuLogoContainer");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");

const containerTag = document.querySelector(".container");
const overlayTopMenuContainerTag = document.querySelector(".overlayTopMenuContainer");

let overlayMenuOpen = false;
topMenuLogoContainerTag.addEventListener("click", ()=>{
    if(overlayMenuOpen === true){
        containerTag.style.display = "flex";
        overlayTopMenuContainerTag.classList.remove("overlayTopMenuContainerShower");
        line2Tag.classList.remove("hideTheDiv");
        line1Tag.classList.remove("rotateRight");
        line3Tag.classList.remove("rotateLeft");
        overlayMenuOpen = false;
    }else{
        containerTag.style.display = "none";
        overlayTopMenuContainerTag.classList.add("overlayTopMenuContainerShower");
        line2Tag.classList.add("hideTheDiv");
        line1Tag.classList.add("rotateRight");
        line3Tag.classList.add("rotateLeft");
        overlayMenuOpen = true;
    }

})