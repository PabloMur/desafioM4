function sobreMi(el) {
  const sobreMiSection = document.createElement("div");
  sobreMiSection.innerHTML = `
  <section class="sobreMi">
      <article class="sobreMi__article">
        <div class="sobreMi__hero">
          <img class="sobreMi__hero--img" src="" alt="yo" />
        </div>
        <div class="sobreMi__content">
          <h2 class="sobreMi__article--h2"></h2>
          <p class="sobreMi__article--p"></p>
        </div>
      </article>
    </section>`;
  el.appendChild(sobreMiSection);

  function traerElContenidoDeSobreMiDesdeContentful() {
    return fetch(
      "https://cdn.contentful.com/spaces/5xbk2z82bc5k/environments/master/entries?access_token=JJ3XNobA54WqjpmpAtiyUtnixWDPg0825dOD4WDCMWo&&content_type=sobreMi"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataParaSobreMi = data.items[0].fields;
        const urlHero = data.includes.Asset[0].fields.file.url;

        const obj = {
          titulo: dataParaSobreMi.titulo,
          texto: dataParaSobreMi.texto,
          url: "https:" + urlHero,
        };
        return obj;
      })
      .then((obj) => {
        const titulo = document.querySelector(".sobreMi__article--h2");
        titulo.textContent = obj.titulo;

        const texto = document.querySelector(".sobreMi__article--p");
        texto.textContent = obj.texto;

        const hero = document.querySelector(".sobreMi__hero--img");
        hero.src = obj.url;
      });
  }
  traerElContenidoDeSobreMiDesdeContentful();
}
