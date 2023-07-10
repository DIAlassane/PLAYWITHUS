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
