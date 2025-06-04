const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Push yourself, because no one else is going to do it for you."
];

function newQuote() {
  const quoteText = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}