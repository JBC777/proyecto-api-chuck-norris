// Función que consume la API de Chuck Norris
const consumirAPI = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        // Extraer el chiste y el ícono del JSON
        const chiste = data.value;
        const icono = data.icon_url;
  
        // Mostrar el chiste e ícono en el DOM
        document.getElementById('resultado').innerHTML = `
          <img src="${icono}" alt="Icono de Chuck Norris" class="mb-3" width="100">
          <p class="alert alert-primary">${chiste}</p>
        `;
      })
      .catch(error => {
        console.error('Error al consumir la API:', error);
      });
  };
  
  // Ejecutar la función cuando la página cargue
  document.addEventListener('DOMContentLoaded', consumirAPI);
  