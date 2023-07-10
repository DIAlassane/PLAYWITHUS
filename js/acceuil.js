// ---------------------------------------------------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// -------------------------------------   ----------------------------------

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

// ----------------------- --------------------------------- -------------------------- 

document.getElementById("email").addEventListener ('input',function(){
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        text.innerHTML = "Vôtre addresse MAIl est valide";
        text.style.color = "green"
    }else {
        text.innerHTML = "Vôtre addresse MAIl est invalide";
        text.style.color = "red"
    }

})

    // ------------------------------------------------------------------------------------------

    const overlapEls = document.querySelectorAll(".overlap") || [];
overlapEls.forEach(el => {
  const chars = [...el.textContent];
  el.innerHTML = "";
  chars.forEach((char,index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.setProperty("--index", index)
    el.append(span)
  })
})
