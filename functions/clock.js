export function statr_app_clock() {
  const clock = document.createElement("div"); // создание блока с часами
  clock.draggable = true; // разрешаем перемещение блока счасами

  clock.classList.add("clock_style_one", "display_none_all"); // добавляем стили блоку с часами

  setInterval(updateClock, 1000); // вызываем функцию updateClock по интерваллу 1-а сек.
  updateClock(); // первичный вызов функцию updateClock
  document.body.append(clock); // добавляем блок с часами в тело страницы

  // пороверяем соостояние объекта display и прячем блок с часамим в случае true
  chrome.storage.local.get(["display"], (result) => {
    if (result.display) clock.classList.remove("display_none_all");
  });

  // следим за изменениями объекта display - убираем/добавляем видимость блоку с часамим
  chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (changes.display) {
      clock.classList.toggle("display_none_all");
    }
  });

  // отслеживаем нажатие комб. ctrl+M и меняем объект display
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyM") {
      // console.log("%cРаботает", "font-size:24px;color:blue;");
      chrome.storage.local.set({
        display: clock.classList.contains("display_none_all"),
      });
    }
  });

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
