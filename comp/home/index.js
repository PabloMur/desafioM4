function home(el) {
  let homeEl = document.createElement("div");
  homeEl.innerHTML = `<div class="banner">
    <h1 class="banner__h1"></h1>
  </div>`;
  el.appendChild(homeEl);

  function traerElContenidoDeHomeDesdeContentful() {
    return fetch(
      "https://cdn.contentful.com/spaces/5xbk2z82bc5k/environments/master/entries?access_token=JJ3XNobA54WqjpmpAtiyUtnixWDPg0825dOD4WDCMWo&&content_type=home"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataParaHome = data.items[0].fields;
        const obj = {
          frase: dataParaHome.frase,
        };
        return obj;
      })
      .then((obj) => {
        const frase = document.querySelector(".banner__h1");
        frase.textContent = obj.frase;
      });
  }
  traerElContenidoDeHomeDesdeContentful();
}
