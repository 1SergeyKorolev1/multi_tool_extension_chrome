const grabBtn = document.getElementById("grabBtn"); // Кнопка "Украсть картитнки"
grabBtn.addEventListener("click", () => {
  // сллушатель клика покнопке "Украсть картитнки"
  chrome.tabs.query({ active: true }, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      // внедряем скрипт(в данном случае функцмию. Варианты func/files) в активную страницу tab.id
      // Выполнить функцию на странице указанной вкладки
      // и передать результат ее выполнения в функцию onResult
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id, allFrames: true },
          func: grabImages,
        },
        onResult
      );
    } else {
      alert("There are no active tabs");
    }
  });
});

function grabImages() {
  // TODO - Запросить список изображений
  // и вернуть список их URL-ов
  const images = document.querySelectorAll("img");
  const array_src = Array.from(images).map((image) => image.src);
  console.log(array_src);
  return array_src;
}

/**
 * Выполняется после всех вызовов grabImages
 * выполненых во всех фреймах удаленной web-страницы.
 * Функция объединяет результаты в строку и копирует
 * список путей к изображениям в буфер обмена
 */
function onResult(frames) {
  // TODO - Объединить списки URL-ов, полученных из каждого фрейма в один,
  // затем объединить их в строку, разделенную символом перевода строки
  // и скопировать в буфер обмена
  // Если результатов нет
  if (!frames || !frames.length) {
    alert("Could not retrieve images from specified page");
    return;
  }
  // Объединить списки URL из каждого фрейма в один массив
  const imageUrls = frames
    .map((frame) => frame.result)
    .reduce((r1, r2) => r1.concat(r2));
  // Скопировать в буфер обмена полученный массив
  // объединив его в строку, используя символ перевода строки
  // как разделитель
  window.navigator.clipboard.writeText(imageUrls.join("\n")).then(() => {
    // закрыть окно расширения после
    // завершения
    window.close();
  });
}
