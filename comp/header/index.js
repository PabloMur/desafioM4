function header(el) {
  let component = document.createElement("header");
  component.innerHTML = `<div class="header">
  <nav class="header__nav">
    <div class="header__nav--logoP">
      <img src="./img/logo.png" alt="logo de la empresa - Pablo Murillo" />
    </div>
    <ul class="header__nav--lista">
      <li><a href="">quien soy</a></li>
      <li><a href="">servicios</a></li>
      <li><a href="">escribime</a></li>
    </ul>
    <img
      class="nav__burger"
      src="./img/burger.png"
      alt="imagen de menu desplegable"
    />
  </nav>
</div>`;
  el.appendChild(component);
}
