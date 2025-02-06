(() => {
  "use strict";
  !(function () {
    const e = document.createElement("div");
    function n() {
      const n = new Date(),
        o = new Intl.DateTimeFormat("ru-Ru", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(n);
      e.innerText = o;
    }
    (e.draggable = !0),
      e.classList.add("clock_style_one", "display_none_all"),
      setInterval(n, 1e3),
      n(),
      document.body.append(e),
      chrome.storage.local.get(["display"], (n) => {
        n.display && e.classList.remove("display_none_all");
      }),
      chrome.storage.onChanged.addListener(function (n, o) {
        n.display && e.classList.toggle("display_none_all");
      }),
      document.addEventListener("keydown", function (n) {
        "KeyM" === n.code &&
          chrome.storage.local.set({
            display: e.classList.contains("display_none_all"),
          });
      }),
      console.log("Привет");
  })();
})();
