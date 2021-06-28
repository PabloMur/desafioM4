function header(el) {
  let component = document.createElement("header");

  component.innerHTML = `<div class="header">
  
    <nav class="header__nav">
      <div class="header__nav--logoP">
        <a href="../../index.html"
          ><img
            class="logoP__img"
            src="/img/logoDos.png"
            alt="logo de la empresa - Pablo Murillo"
        /></a><p class="pageName">Pablo Murillo</p>
      </div>
      <ul class="header__nav--lista">
        <li><a href="../../portfolio.html">portfolio</a></li>
        <li><a href="../../servicios.html">servicios</a></li>
        <li><a href="../../contacto.html">contacto</a></li>
      </ul>
      <img
        class="header__nav--burger"
        src="./img/burger.svg"
        alt="imagen de menu desplegable"
      />
    </nav>
    <div class="header__menu-modal">
      <ul class="header__menu-modal--lista">
        <li><a href="../../portfolio.html">portfolio</a></li>
        <li><a href="../../servicios.html">servicios</a></li>
        <li><a href="../../contacto.html">contacto</a></li>
        <li><a href="../../index.html">home</a></li>
      </ul>
    </div>
  
</div>`;
  el.appendChild(component);

  function menuDesplegable() {
    const boton = document.querySelector(".header__nav--burger");
    const modal = document.querySelector(".header__menu-modal");

    boton.addEventListener("click", function () {
      modal.classList.add("showModal");
    });
  }
  menuDesplegable();
}
