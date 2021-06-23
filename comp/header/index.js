function header(el) {
  let component = document.createElement("header");

  component.innerHTML = `<div class="header">
  <template id="header__template">
    <nav class="header__nav">
      <div class="header__nav--logoP">
        <a href="../../index.html"
          ><img
            class="logoP__img"
            src="/img/logo.png"
            alt="logo de la empresa - Pablo Murillo"
        /></a><p class="pageName"></p>
      </div>
      <ul class="header__nav--lista">
        <li><a href="./pages/sobreMi/index.html" class="link1"></a></li>
        <li><a href="" class="link2">servicios</a></li>
        <li><a href="./pages/contacto/index.html" class="link3"></a></li>
      </ul>
      <img
        class="header__nav--burger"
        src="./img/burger.svg"
        alt="imagen de menu desplegable"
      />
    </nav>
    <div class="header__menu-modal">
      <ul class="header__menu-modal--lista">
        <li><a href="./pages/sobreMi/index.html" class="link1">quien soy</a></li>
        <li><a href="" class="link2">servicios</a></li>
        <li><a href="./pages/contacto/index.html" class="link3">escribime</a></li>
      </ul>
    </div>
  </template>
</div>`;
  el.appendChild(component);

  function addHeaderComponent(params = {}) {
    const template = document.querySelector("#header__template");
    const container = document.querySelector(".header");

    template.content.querySelector(".pageName").textContent = params.pageName;

    template.content.querySelector(".logoP__img").textContent = params.logo;

    template.content.querySelector(".link1").textContent = params.link1;

    template.content.querySelector(".link2").textContent = params.link2;

    template.content.querySelector(".link3").textContent = params.link3;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }

  function getWorks() {
    return fetch(
      "https://cdn.contentful.com/spaces/5xbk2z82bc5k/environments/master/entries?access_token=JJ3XNobA54WqjpmpAtiyUtnixWDPg0825dOD4WDCMWo&&content_type=header"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataParaElHeader = data.items[0].fields;
        const imgDeLaData = "https:" + data.includes.Asset[0].fields.file.url;

        const obj = {
          pageName: dataParaElHeader.pageName,
          link1: dataParaElHeader.link,
          link2: dataParaElHeader.link2,
          link3: dataParaElHeader.link3,
          logo: imgDeLaData,
        };
        return obj;
      })
      .then((object) => {
        console.log(object);
        addHeaderComponent(object);
      });
  }

  getWorks();
}
