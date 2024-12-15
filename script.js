// Initialize AOS
AOS.init({
    duration: 1200, // Animation duration in ms
});
// Select all buttons
const animatedButtons = document.querySelectorAll(".animated-button");

// Observer for scroll-based visibility
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add visible class
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  },
  { threshold: 0.2 }
);

// Attach observer to each button
animatedButtons.forEach((button) => observer.observe(button));
