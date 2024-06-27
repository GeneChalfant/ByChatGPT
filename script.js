const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

document.getElementById('jokeBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke').innerText = jokes[randomIndex];
});
