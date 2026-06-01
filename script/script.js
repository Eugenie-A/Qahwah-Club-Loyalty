const stamps = document.querySelectorAll(".stamp");
const btn = document.getElementById("add-btn");
let stampCount = parseInt(localStorage.getItem("stamps")) || 0;

for (let i = 0; i < stampCount; i++) {
  stamps[i].classList.add("filled");
}

btn.addEventListener("click", function () {
  let filled = stamps[stampCount].classList.add("filled");
  stampCount++;
  localStorage.setItem("stamps", stampCount);

  if (stampCount === 9) {
    alert("Free drink!");
  }
});
