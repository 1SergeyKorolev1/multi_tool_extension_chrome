(() => {
  "use strict";
  !(function () {
    const e = document.createElement("div");
    function t() {
      const t = new Date(),
        o = new Intl.DateTimeFormat("ru-Ru", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(t);
      e.innerText = o;
    }
    (e.draggable = !0),
      e.classList.add("clock_style_one", "display_none_all"),
      setInterval(t, 1e3),
      t(),
      document.body.append(e),
      chrome.storage.local.get(["display"], (t) => {
        t.display && e.classList.remove("display_none_all");
      }),
      chrome.storage.local.get(["position_y"], (t) => {
        t.position_y && (e.style.top = t.position_y);
      }),
      chrome.storage.local.get(["position_x"], (t) => {
        t.position_x && (e.style.left = t.position_x);
      }),
      chrome.storage.onChanged.addListener(function (t, o) {
        t.display && e.classList.toggle("display_none_all");
      }),
      document.addEventListener("keydown", function (t) {
        "KeyM" === t.code &&
          chrome.storage.local.set({
            display: e.classList.contains("display_none_all"),
          });
      }),
      e.addEventListener("dragstart", (e) => {});
    const o = document.getElementsByTagName("body")[0];
    o.addEventListener("dragover", (e) => {
      e.preventDefault();
    }),
      o.addEventListener("drop", (t) => {
        (e.style.top = t.pageY + "px"),
          (e.style.left = t.pageX + "px"),
          chrome.storage.local.set({ position_x: t.pageX + "px" }),
          chrome.storage.local.set({ position_y: t.pageY + "px" });
      });
  })();
})();
