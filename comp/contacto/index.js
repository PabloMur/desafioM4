function contacto(el) {
  const contactoEl = document.createElement("div");
  contactoEl.innerHTML = `<div class="formulario">
  <h2 class="formulario__title">Escribime</h2>
  <form class="formulario__form">

      <label class="form__name">NOMBRE
      <input id="GET-name" type="text" name="name">
      </label>

    
      <label class="form__email">EMAIL
    <input id="GET-email" type="text" name="email">
    </label>


      <label class="form__message" >Mensaje
    <textarea name="mensaje" id="GET-mensaje"></textarea>
    </label> 

    <input id="boton" type="submit" value="Enviar">
  </form>
</div>`;
  el.appendChild(contactoEl);

  function enviarMensaje() {
    const formEl = document.querySelector(".formulario__form");

    formEl.addEventListener("submit", (evento) => {
      evento.preventDefault();
      let formulario = new FormData(evento.target);
      let obj = Object.fromEntries(formulario.entries());

      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: "pablomurillo.sp@gmail.com",
          message: `
          from: ${obj.name}___
          ___contacto: ${obj.email}
          ___mensaje:${obj.mensaje}`,
        }),
      })
        .then((res) => {
          res.json();
        })
        .then((data) => console.log("mensaje enviado"));
    });
  }

  enviarMensaje();
}
