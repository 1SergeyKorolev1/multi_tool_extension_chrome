(() => {
  "use strict";
  !(function () {
    const e = document.createElement("div");
    function n() {
      const n = new Date(),
        t = new Intl.DateTimeFormat("ru-Ru", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(n);
      e.innerText = t;
    }
    (e.draggable = !0),
      e.classList.add("clock_style_one"),
      setInterval(n, 1e3),
      n(),
      document.body.append(e),
      console.log("Привет");
  })();
})();
