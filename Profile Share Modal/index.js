const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

//modal openfunction
function openModal(){
    console.log("modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};
//modal closefunction
function closeModal(){
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};