export function start_app_snow() {
  // отслеживаем нажатие комб. ctrl+B
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyB") {
      start_snow();
    }
  });

  let id_interval;

  function start_snow() {
    // console.log("%cРаботает", "font-size:24px;color:blue;");
    let check = document.querySelector(".father_div");
    if (!check) {
      let father_div = document.createElement("div");
      father_div.className = "father_div";
      document.body.append(father_div);
      id_interval = setInterval(time_interval, 300);
    } else {
      let parent = document.querySelector(".father_div").parentNode;
      if (id_interval !== 0) {
        clearInterval(id_interval);
      }
      parent.removeChild(document.querySelector(".father_div"));
    }
  }

  function time_interval() {
    const children_div = document.createElement("div");
    children_div.className = "children_div";
    children_div.textContent = "❄";
    children_div.style.left =
      Math.random() * 100 + "vw"; /* горизонтальное положение от 0vw to 100vw */
    children_div.style.animationDuration =
      Math.random() * 3 +
      7 +
      "s"; /* продолжительность анимации падения от 7 до 10с */
    children_div.style.fontSize =
      Math.random() * 10 + 10 + "px"; /* размер снежинки от 10 до 20px */
    document.querySelector(".father_div").appendChild(children_div);
  }
}
