<h1 align="center">Hi there, I'm <a href="https://github.com/1SergeyKorolev1" target="_blank">Sergey Korolev</a>
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/> Разработчик из России 🇷🇺</h1>

### multi_tool_extension_chrome

#### Pet-проект и Мульти расширение для браузера хром на котором я тренирую свои навыки...

---

#### для загрузки расширения нужно ввести chrome://extensions в браузере, чтобы открыть Chrome Extensions Manager и нажать на кнопку "загрузить распакованное расширение":

#### для установки:

- клонируйте проект командой git clone git@github.com:1SergeyKorolev1/multi_tool_extension_chrome.git

#### далее удалите все кроме:

- multi_tool_extension_chrome
  - dist
    - main.js - тут я всегда оставляю финальную сборку на которую ссылайтся manifest.json
  - manifest.json
  - styly.css

---

На данном этапе разрабатываются интерактивные часы с функциями:

- можно передвинуть в любое место страницы браузера
- включить или выключить видимость ctrl+M
- информация о измененном положении и видимости записывается в хранилище chrome браузера
