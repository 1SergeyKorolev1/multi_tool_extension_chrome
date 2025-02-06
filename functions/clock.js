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

  // пороверяем соостояние объекта position_y и
  // устанавливаем нужное положение блоку с часамим в случае true
  chrome.storage.local.get(["position_y"], (result) => {
    if (result.position_y) clock.style.top = result.position_y;
  });

  // пороверяем соостояние объекта position_x и
  // устанавливаем нужное положение блоку с часамим в случае true
  chrome.storage.local.get(["position_x"], (result) => {
    if (result.position_x) clock.style.left = result.position_x;
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

  let dragged = null; // перемещенные данные
  // в обработчике устанавливаем ссылку на перетаскиваемый элемент
  clock.addEventListener("dragstart", (e) => {
    dragged = e.target;
  });
  // целевая область перемещения
  const body_html = document.getElementsByTagName("body")[0];
  // body_html.style.position = "relative";
  // предупреждаем событие drop
  body_html.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  // полностью перемещаем перетаскиваемый элемент на
  // целевую область и создаем два объекта в хранилище chrome с данными о положении
  body_html.addEventListener("drop", (e) => {
    clock.style.top = e.pageY + "px";
    clock.style.left = e.pageX + "px";
    chrome.storage.local.set({ position_x: e.pageX + "px" });
    chrome.storage.local.set({ position_y: e.pageY + "px" });
  });
}
