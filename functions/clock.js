export function statr_app_clock() {
  const clock = document.createElement("div"); // создание блока с часами
  clock.draggable = true; // разрешаем перемещение блока счасами

  clock.classList.add("clock_style_one"); // добавляем стили блоку с часами

  setInterval(updateClock, 1000); // вызываем функцию updateClock по интерваллу 1-а сек.
  updateClock(); // первичный вызов функцию updateClock
  document.body.append(clock); // добавляем блок с часами в тело страницы

  function updateClock() {
    // фунция полученя времени и вывода его в блок с часами
    const date = new Date();
    const time = new Intl.DateTimeFormat("ru-Ru", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
    clock.innerText = time;
  }
  console.log("Привет");
}
