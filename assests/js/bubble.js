// // Function to create a random bubble
// function createBubble() {
//   const bubble = document.createElement("div");
//   bubble.classList.add("bubble");

//   // Randomize size, position, and animation duration
//   const size = Math.random() * 30 + 10; // Bubble size between 10px and 40px
//   bubble.style.width = `${size}px`;
//   bubble.style.height = `${size}px`;
//   bubble.style.left = `${Math.random() * 100}vw`; // Random horizontal position
//   bubble.style.bottom = `-10px`; // Start at the bottom of the screen

//   // Randomize color
//   bubble.style.backgroundColor = `rgba(${Math.floor(
//     Math.random() * 255
//   )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
//     Math.random() * 255
//   )}, 0.7)`;

//   // Randomize animation duration
//   const duration = Math.random() * 5 + 1; // Between 5s and 10s
//   bubble.style.animationDuration = `${duration}s`;

//   // Add bubble to the document body
//   document.body.appendChild(bubble);

//   // Remove bubble once it floats out of view
//   bubble.addEventListener("animationend", () => {
//     bubble.remove();
//   });
// }

// // Create bubbles at intervals
// setInterval(createBubble, 50); // Every 500 milliseconds
