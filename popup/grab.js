const grabBtn = document.getElementById("grabBtn"); // Кнопка "Украсть картитнки"
grabBtn.addEventListener("click", () => {
  // сллушатель клика покнопке "Украсть картитнки"
  chrome.tabs.query({ active: true }, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      alert(tab.id);
    } else {
      alert("There are no active tabs");
    }
  });
});
