// -------------------------
// Part 2: Functions, Scope, Params & Returns
// -------------------------

// Example: Calculate area of a box (uses parameters & return)
function calculateArea(width, height) {
  return width * height;
}

// Demonstrate scope
let globalMessage = "Hello from Global Scope!";

function scopeDemo() {
  let localMessage = "Hello from Local Scope!";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Only inside function
}
scopeDemo();

// -------------------------
// Part 3: Combine JS + CSS
// -------------------------

// Animate box on click
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  jsBox.classList.toggle("animate");
  console.log("Box area:", calculateArea(100, 100)); // Reuse function
});

// Modal logic
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
