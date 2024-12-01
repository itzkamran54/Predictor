function generatePrediction() {
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const dob = new Date(document.getElementById('dob').value);
    const month = dob.getMonth(); // Get birth month (0-11)

    const monthPredictions = [
        "January people are destined to lead their own parade!",
        "February born? Expect unexpected adventures!",
        "March babies will discover a hidden superpower soon!",
        "April folks? You're basically a human confetti cannon!",
        "May-born? You're secretly the world's best detective.",
        "June-born are natural party starters. Fact.",
        "July-born? Prepare for a surprise karaoke moment!",
        "August kids have the power of amazing luck!",
        "September folks: You're due for a plot twist!",
        "October? You'll win an argument soon. Probably.",
        "November? You're a magnet for good vibes.",
        "December-born? You're the life of every holiday party!",
    ];

    const genericPredictions = [
        "You'll invent a new ice cream flavor that becomes a global sensation.",
        "Your dance moves will go viral on TikTok!",
        "You're going to win a mysterious prize soon.",
        "A cat will cross your path... and bring good luck!",
        "You're about to find something you thought was lost.",
        "An unexpected guest will bring joy to your day!",
        "You're destined to star in a viral meme soon."
    ];

    // Randomize predictions
    const personalPrediction = monthPredictions[month];
    const randomGenericPrediction = genericPredictions[Math.floor(Math.random() * genericPredictions.length)];

    // Display result with animations
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Hey ${name}, <br> 🎉 ${personalPrediction} <br> 😂 Also, ${randomGenericPrediction}`;
    resultDiv.style.opacity = 0;
    setTimeout(() => resultDiv.style.opacity = 1, 100);
}
