import App from "./App";
window.addEventListener("DOMContentLoaded", () => {
  new App(document.querySelector("#app")); //app.js의 container(index.html)에서 #app으로 설정되어있던 요소가 불러와짐 -> <div id="app"></div>
});
