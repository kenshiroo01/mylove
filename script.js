const messageElement = document.getElementById('message');
const generateButton = document.getElementById('generate-button');

const messages = [
    "Hi My Love",
    "Happy Monthsary for both of us!",
    "You know how much i love you right my love?",
    "To the point na i can give anything you want as long as i can",
    "I'm so lucky to have you love",
    "I just want you to know that you are the most amazing person I've ever met.",
    "You're so beautiful, my love.",
    "The 'I love you' is not enough for my love for you, even if you're stubborn.",
    "You are the answer to my prayer.",
    "I hope you can be more patient with me.",
    "I'm so lucky to have you in my life",
    "You're my everything",
    "You're the reason my life feels so full, so rich in love and happiness",
    "I want to make you the happiest woman in the world",
    "I will be here for you whenever you need me.",
    "Your smile lights up my world",
    "You make my life so much more beautiful just by being in it.",
    "You are the love of my life, my dream come true, and my everything. ",
    "I love you more than words can say. You are my heart, my soul, and my everything.",
    "I never knew what love was until I met you. ",
    "I thank God for bringing you into my life",
    "I promise you that I will marry you in any church you want, love.",
    "You are already part of my future plans, so please stay with me.",
    "I love you always ganda"

    
];

let currentIndex = 0;

generateButton.addEventListener('click', () => {
    if (currentIndex < messages.length) {
        messageElement.textContent = messages[currentIndex];
        currentIndex++;
    } else {
        // Handle the case where all messages have been displayed
        // You could reset the index, display a message, or disable the button
        currentIndex = 0;
        messageElement.textContent = "All messages displayed!";
        // generateButton.disabled = true;
    }
});