document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('card-form');
    const contenedorTarjetas = document.getElementById('card-container');


    formulario.addEventListener('submit', (evento) => {
       
        evento.preventDefault();

        const nombre = document.getElementById('name').value;
        const especialidad = document.getElementById('specialty').value;
        const urlImagen = document.getElementById('image-url').value;
        const colorFondo = document.getElementById('bg-color').value;
        const colorBorde = document.getElementById('border-color').value;
   

     
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card';
        tarjeta.style.backgroundColor = colorFondo;
        tarjeta.style.border = `2px solid ${colorBorde}`;

    
        tarjeta.innerHTML = `
            <img src="${urlImagen}" alt="Foto del Doctor">
            <div class="card-content">
                <h3 class="card-title">${nombre}</h3>
                <p class="card-specialty">Especialidad: ${especialidad}</p>
            </div>
        `;

        
        contenedorTarjetas.appendChild(tarjeta);

    
        console.log({
            nombre,
            especialidad,
            urlImagen,
            colorFondo,
            colorBorde
        });

        
        formulario.reset();
    });
});
