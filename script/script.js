const stamps = document.querySelectorAll(".stamp");
const btn = document.getElementById("add-btn");
let stampCount = parseInt(localStorage.getItem("stamps")) || 0;

// Fill stamps on page load
for (let i = 0; i < stampCount && i < stamps.length; i++) {
  stamps[i].classList.add("filled");
}

btn.addEventListener("click", function () {
  // Fill the stamp if it exists
  if (stampCount < stamps.length) {
    stamps[stampCount].classList.add("filled");
    stampCount++;
    localStorage.setItem("stamps", stampCount);
  }

  // Reset when full
  if (stampCount >= stamps.length) {
    alert("Free drink!");
    stampCount = 0;
    localStorage.setItem("stamps", 0);
    stamps.forEach((stamp) => stamp.classList.remove("filled"));
  }
});
