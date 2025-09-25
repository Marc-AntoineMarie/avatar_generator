document.getElementByid("random-btn").addEventListener("click", () => {
    console.log("Randomize Button Clicked");
});

for (const cat in categories) {
    const category = categories[cat];
    category.index  = Math.floor(Math.random() * category.images.lenght);
    updateImage(cat);
}

document.getElementByid("random-btn").addEventListener("click", randomize);