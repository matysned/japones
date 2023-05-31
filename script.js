// Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agregar comportamiento de desplazamiento suave a los enlaces de navegación
    const navLinks = document.querySelectorAll('nav ul li a');
    for (const link of navLinks) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    }
  //

    // Agregar comportamiento para enviar una reserva
    const reservaForm = document.querySelector('#reservas form');
    reservaForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Aquí puedes agregar la lógica para enviar la reserva, por ejemplo, mediante una solicitud AJAX
      // Después de enviar la reserva, puedes mostrar un mensaje de confirmación al usuario
      alert('¡Reserva enviada con éxito!');
      reservaForm.reset();
    });
  
    // Agregar comportamiento para enviar un mensaje de contacto
    const contactoForm = document.querySelector('#contacto form');
    contactoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Aquí puedes agregar la lógica para enviar el mensaje de contacto, por ejemplo, mediante una solicitud AJAX
      // Después de enviar el mensaje, puedes mostrar un mensaje de confirmación al usuario
      alert('¡Mensaje enviado con éxito!');
      contactoForm.reset();
    });
  });//
  // Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agregar comportamiento de desplazamiento suave a los enlaces de navegación
    // ...
  
    // Agregar comportamiento para enviar una reserva
    const reservaForm = document.querySelector('#reservas form');
    reservaForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validar los campos del formulario
      const nombreInput = reservaForm.querySelector('input[name="nombre"]');
      const emailInput = reservaForm.querySelector('input[name="email"]');
      const fechaInput = reservaForm.querySelector('input[name="fecha"]');
      const horaInput = reservaForm.querySelector('input[name="hora"]');
  
      let isValid = true;
  
      if (nombreInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa tu nombre.');
      }
  
      if (emailInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa tu correo electrónico.');
      }
  
      if (fechaInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, selecciona una fecha.');
      }
  
      if (horaInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, selecciona una hora.');
      }
  
      // Enviar la reserva si todos los campos son válidos
      if (isValid) {
        // Aquí puedes agregar la lógica para enviar la reserva, por ejemplo, mediante una solicitud AJAX
        // Después de enviar la reserva, puedes mostrar un mensaje de confirmación al usuario
        alert('¡Reserva enviada con éxito!');
        reservaForm.reset();
      }
    });
  
    // Agregar comportamiento para enviar un mensaje de contacto
    // ...
  });
  // Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agregar comportamiento de desplazamiento suave a los enlaces de navegación
    // ...
  
    // Agregar comportamiento para enviar una reserva
    // ...
  
    // Agregar comportamiento para enviar un mensaje de contacto
    const contactoForm = document.querySelector('#contacto form');
    contactoForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validar los campos del formulario
      const nombreInput = contactoForm.querySelector('input[name="nombre"]');
      const emailInput = contactoForm.querySelector('input[name="email"]');
      const mensajeTextarea = contactoForm.querySelector('textarea[name="mensaje"]');
  
      let isValid = true;
  
      if (nombreInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa tu nombre.');
      }
  
      if (emailInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa tu correo electrónico.');
      }
  
      if (mensajeTextarea.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa tu mensaje.');
      }
  
      // Enviar el mensaje si todos los campos son válidos
      if (isValid) {
        // Aquí puedes agregar la lógica para enviar el mensaje de contacto, por ejemplo, mediante una solicitud AJAX
        // Después de enviar el mensaje, puedes mostrar un mensaje de confirmación al usuario
        alert('¡Mensaje enviado con éxito!');
        contactoForm.reset();
      }
    });
  });
  