function servicios(el) {
  const serviciosEl = document.createElement("div");
  serviciosEl.innerHTML = `<section class="servicios">
  <h2 class="servicios--title">
    Mis Servicios
  </h2>
  <div class="portfolio--container__results">
  <template id="portfolio--work__template">
          <div class="portfolio--work">
            <img
              class="potfolio--work__img"
              src="./img/image1.png"
              alt="imagen de un trabajo realizado con las tecnologias que hemos aprendido en APX"
            />
            <div class="portfolio--work__content">
              <h3 class="portfolio--work__title">titulo</h3>
              <p class="portfolio--work__description">
                Te cuento un poco más sobre este trabajo y sobre cómo la rompí
                en este proyecto. si el texto se hace...
              </p>
              <a class="portfolio--work__link" href="#">ver más</a>
            </div>
          </div>
        </template>
 </div>
</section>`;
  el.appendChild(serviciosEl);
}

function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio--work__template");
  const container = document.querySelector(".portfolio--container__results");

  template.content.querySelector(".portfolio--work__title").textContent =
    params.title;

  template.content.querySelector(".portfolio--work__description").textContent =
    params.description;

  template.content.querySelector(".potfolio--work__img").src = params.img;

  template.content.querySelector(".portfolio--work__link").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/5xbk2z82bc5k/environments/master/entries?access_token=JJ3XNobA54WqjpmpAtiyUtnixWDPg0825dOD4WDCMWo&&content_type=portfolio"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //funcion que nos da un array con los items de cms
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          url: item.fields.url,
          urlIMg: item.fields.imagen.sys.id,
        };
      });

      //funcion que nos da un array con las imagenes de los elementos
      const urlImgEl = data.includes.Asset.map((item) => {
        return {
          url: item.fields.file.url,
          id: item.sys.id,
        };
      });
      //funcion que busca por cada item la imagen que le corresponde por id, dentro del array de imagenes
      const devuelvePares = () => {
        let items = fieldsCollection;
        let arrayRespuesta = [];

        for (const item of items) {
          let arrayImagenes = urlImgEl;
          for (const imagen of arrayImagenes) {
            if (item.urlIMg == imagen.id) {
              item.img = "http:" + imagen.url;
              arrayRespuesta.push(item);
            }
          }
        }

        return arrayRespuesta;
      };

      return devuelvePares();
    });
}

function main() {
  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });
}

main();
