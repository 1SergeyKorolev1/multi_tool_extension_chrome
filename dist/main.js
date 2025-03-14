(() => {
  "use strict";
  !(function () {
    const e = document.createElement("div");
    function t() {
      const t = new Date(),
        n = new Intl.DateTimeFormat("ru-Ru", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(t);
      e.innerText = n;
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
      chrome.storage.onChanged.addListener(function (t, n) {
        t.display && e.classList.toggle("display_none_all");
      }),
      document.addEventListener("keydown", function (t) {
        t.ctrlKey &&
          "KeyV" === t.code &&
          chrome.storage.local.set({
            display: e.classList.contains("display_none_all"),
          });
      }),
      e.addEventListener("dragstart", (e) => {}),
      e.addEventListener("dragend", (t) => {
        (e.style.top = t.clientY + "px"),
          (e.style.left = t.clientX + "px"),
          chrome.storage.local.set({ position_x: t.clientX + "px" }),
          chrome.storage.local.set({ position_y: t.clientY + "px" });
      });
  })(),
    (function () {
      let e;
      function t() {
        const e = document.createElement("div");
        (e.className = "children_div"),
          (e.textContent = "❄"),
          (e.style.left = 100 * Math.random() + "vw"),
          (e.style.animationDuration = 3 * Math.random() + 7 + "s"),
          (e.style.fontSize = 10 * Math.random() + 10 + "px"),
          document.querySelector(".father_div").appendChild(e);
      }
      document.addEventListener("keydown", function (n) {
        n.ctrlKey &&
          "KeyB" === n.code &&
          (function () {
            if (document.querySelector(".father_div")) {
              let t = document.querySelector(".father_div").parentNode;
              0 !== e && clearInterval(e),
                t.removeChild(document.querySelector(".father_div"));
            } else {
              let n = document.createElement("div");
              (n.className = "father_div"),
                document.body.append(n),
                (e = setInterval(t, 300));
            }
          })();
      });
    })();
})();
