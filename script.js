const categories = {
    addOns: {
      images: [
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/21.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/22.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/23.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/24.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/25.png",
      ],
      index: 0,
      element: document.getElementById("addOns"),
      nextBtn: "0nextBtn",
      prevBtn: "0prevBtn",
    },
    tops: {
      images: [
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/01.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/02.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/03.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/04.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/05.png",
      ],
      index: 0,
      element: document.getElementById("tops"),
      nextBtn: "1nextBtn",
      prevBtn: "1prevBtn",
    },
    bottoms: {
      images: [
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/11.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/12.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/13.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/14.png",
        "https://cdn.glitch.global/61b7b4da-9ad2-4a9f-abea-326808d0ac33/15.png",
      ],
      index: 0,
      element: document.getElementById("bottoms"),
      nextBtn: "2nextBtn",
      prevBtn: "2prevBtn",
    },
  };
  
  // Update the image for a given category
  function updateImage(cat) {
    const category = categories[cat];
    category.element.src = category.images[category.index];
  }
  
  // Set up navigation buttons
  function setupButtons() {
    for (const cat in categories) {
      const category = categories[cat];
      document.getElementById(category.nextBtn).addEventListener("click", () => {
        category.index = (category.index + 1) % category.images.length;
        updateImage(cat);
      });
      document.getElementById(category.prevBtn).addEventListener("click", () => {
        category.index =
          (category.index - 1 + category.images.length) % category.images.length;
        updateImage(cat);
      });
    }
  }
  
  // Randomize images
  function randomize() {
    for (const cat in categories) {
      const category = categories[cat];
      category.index = Math.floor(Math.random() * category.images.length);
      updateImage(cat);
    }
    createConfetti();
  }
  
  document.getElementById("random-btn").addEventListener("click", randomize);
  
  // Confetti effect
  function createConfetti() {
    const confettiContainer = document.getElementById("confetti");
    confettiContainer.style.opacity = 1;
  
    for (let i = 0; i < 100; i++) {
      const confettiPiece = document.createElement("div");
      confettiPiece.classList.add("confetti-piece");
      confettiPiece.style.backgroundColor = getRandomColor();
      confettiPiece.style.left = `${Math.random() * window.innerWidth}px`;
      confettiPiece.style.animationDelay = `${Math.random() * 0.5}s`;
      confettiContainer.appendChild(confettiPiece);
      setTimeout(() => confettiPiece.remove(), 2500);
    }
  
    setTimeout(() => {
      confettiContainer.style.opacity = 0;
    }, 3000);
  }
  
  function getRandomColor() {
    const colors = [
      "#ff4d4d",
      "#ffb84d",
      "#ff4dff",
      "#4dff4d",
      "#4dffb8",
      "#4d90ff",
      "#d24dff",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Initial image load and button setup
  for (const cat in categories) {
    updateImage(cat);
  }
  
  setupButtons();
  