function toggleOnClick() {
    document.getElementById("mobile-nav").style.display = "block";
    document.getElementById("tgl-img").style.display = "none";
    document.getElementById("close-btn").style.display = "block";

     document.body.style.overflow = "hidden";
    
}
function closeOnClick(){
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("tgl-img").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
     document.body.style.overflow = "auto"; // or "visible"
}