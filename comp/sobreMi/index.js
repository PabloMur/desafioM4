function sobreMi(el) {
  const sobreMiSection = document.createElement("div");
  sobreMiSection.innerHTML = `<section class="sobreMi">
<article class="sobreMi__article">
  <h2 class="sobreMi__article--h2">Soy Pablo</h2>
  <p class="sobreMi__article--p">
  Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales vehicula velit. Aenean lobortis posuere tristique. Phasellus placerat arcu elementum nisi ultrices cursus. Etiam sit amet aliquet lacus. Integer ut iaculis augue, sit amet tincidunt ex. In eleifend justo et sodales semper. Mauris nec tortor lectus. Curabitur nec ultricies dolor.
  </p>
</article>
</section>`;
  el.appendChild(sobreMiSection);
}
