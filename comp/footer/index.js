function footer(el) {
  let footerEl = document.createElement("div");
  footerEl.innerHTML = `<footer class="footerEl">
  <div class="footerEl__logoPersonal">
    <img class="footerEl__logoPersonal--img" src="/img/logoDos.png" alt="#" />
  </div>
  <div class="footerEl__contactList">
    <ul class="footerEl__contactList--ul">
      <li class="contactList__item">
        <a
          target="_blank"
          href="https://www.instagram.com/pol.murr/?hl=es-la"
          >instagram</a
        ><img
          class="contactList__item--img"
          src="https://image.flaticon.com/icons/png/512/2111/2111463.png"
          alt="#"
        />
      </li>
      <li class="contactList__item">
        <a
          href="https://www.linkedin.com/in/pablo-murillo-57034b189/"
          target="_blank"
        ></a>
        linkedin<img
          class="contactList__item--img"
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
      </li>
      <li class="contactList__item">
        <a href="https://github.com/PabloMur" target="_blank">github</a>
        <img class="contactList__item--img" src="https://image.flaticon.com/icons/png/512/25/25657.png" alt="" />
      </li>
    </ul>
  </div>
</footer>`;
  el.appendChild(footerEl);
  function traerLogo() {
    return fetch(
      "https://cdn.contentful.com/spaces/5xbk2z82bc5k/environments/master/entries?access_token=JJ3XNobA54WqjpmpAtiyUtnixWDPg0825dOD4WDCMWo&&content_type=footer"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let logoImg = document.querySelector(".footerEl__logoPersonal--img");
        logoImg.src = data.includes.Asset[0].fields.file.url;
      });
  }
}
