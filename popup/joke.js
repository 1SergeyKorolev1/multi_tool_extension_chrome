const grabElement = document.querySelector(".button_one");
const jokeElement = document.querySelector(".joke_title");

function getRandomQuote() {
  jokeElement.textContent = "Загрузка шутки..."; // Показать сообщение о загрузке

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      jokeElement.textContent = `"${data.setup}" — ${data.punchline}`;
    })
    .catch((err) => {
      console.log("Ошибка при получении шутки:", err);
      jokeElement.textContent = "Не удалось загрузить шутку.";
    });
}

getRandomQuote();

grabElement.addEventListener("click", () => {
  getRandomQuote();
});
