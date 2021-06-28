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
          src="/img/instagram.svg"
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
          src="/img/linkedin.svg"
          alt=""
        />
      </li>
      <li class="contactList__item">
        <a href="https://github.com/PabloMur" target="_blank">github</a>
        <img class="contactList__item--img" src="/img/github.svg" alt="" />
      </li>
    </ul>
  </div>
</footer>`;
  el.appendChild(footerEl);
}
