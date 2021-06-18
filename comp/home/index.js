function home(el) {
  let homeEl = document.createElement("div");
  homeEl.innerHTML = `<div class="banner">
    <h1 class="banner__h1">Hola <br>soy Pablo;</h1>
  </div>`;
  el.appendChild(homeEl);
}
