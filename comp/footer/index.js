function footer(el) {
  let footerEl = document.createElement("div");
  footerEl.innerHTML = `<footer class="footerEl">
  <div class="footerEl__logoPersonal">
    <img class="footerEl__logoPersonal--img" src="/img/logo.png" alt="#">
  </div>
  <div class="footerEl__contactList">
    <ul class="footerEl__contactList--ul">
      <li class="contactList__item"><a href="https://www.instagram.com/pol.murr/?hl=es-la">instagram</a><img class="contactList__item--img" src="/img/logotipo-de-instagram.png" alt="#"></li>
      <li class="contactList__item">linkedin<img class="contactList__item--img" src="/img/linkedin.png" alt="#"></li>
      <li class="contactList__item">github<img class="contactList__item--img" src="/img/github.png" alt="#"></li>
    </ul>
  </div>
</footer>`;
  el.appendChild(footerEl);
}
