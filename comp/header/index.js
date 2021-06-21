function header(el) {
  let component = document.createElement("header");
  component.innerHTML = `<div class="header">
  <nav class="header__nav">
    <div class="header__nav--logoP">
    <a href="../../index.html"><img class="logoP__img"src="/img/logo.png" alt="logo de la empresa - Pablo Murillo" /></a>
    </div>
    <ul class="header__nav--lista">
      <li><a href="./pages/sobreMi/index.html">quien soy</a></li>
      <li><a href="">servicios</a></li>
      <li><a href="./pages/contacto/index.html">escribime</a></li>
    </ul>
    <img
      class="header__nav--burger"
      src="./img/burger.png"
      alt="imagen de menu desplegable"
    />
  </nav>
</div>`;
  el.appendChild(component);
}
