document.addEventListener("DOMContentLoaded", function () {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    // Random size
    const size = Math.random() * 5 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 30 + 10;
    particle.style.animationDuration = `${duration}s`;

    // Random delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }
});

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className =
    "fixed bottom-4 right-4 glass rounded-lg p-4 neon-box animate__animated animate__fadeInUp z-50";
  notification.innerHTML = `
        <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p>${message}</p>
        </div>
    `;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.replace("animate__fadeInUp", "animate__fadeOutDown");
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

const useState = (initialValue) => {
  let state = initialValue;
  const setState = (newValue) => {
    state = newValue;
    return state;
  };
  return [state, setState];
};
