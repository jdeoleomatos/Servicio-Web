const API_URL = 'http://localhost:3000';

function getContacts() {
    var contactos = document.getElementById('Contactos');
     fetch(API_URL + '/getContacto')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('Error ' + respuesta.statusText);
            }
            return respuesta.json();
        })
        .catch(error => {
            console.error('Errorrrrrrrrrr: ', error);
        })
        .then(data => {
            contactos.innerHTML = '';
            data.forEach(contacto => {
                const card = document.createElement('div');
                card.classList.add('contact-card');
                card.innerHTML = `
                    <strong>${contacto.nombre}  ${contacto.apellido}</strong><br>
                    <span>${contacto.telefono}</span>
                `;
                contactos.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error: ', error);
        });

}

function addContact() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('numero').value.trim();
    
    if (!nombre || !apellido || !telefono) {
        alert('Por favor, completa todos los campos.');
        return false; // Prevenir envío del formulario
    }
    
    const nuevoContacto = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono
    };
    
    fetch(API_URL + '/addContacto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoContacto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al agregar contacto: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Contacto agregado exitosamente:', data);
        // Limpiar los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('numero').value = '';
        // Recargar la lista de contactos
        getContacts();
    })
    .catch(error => {
        console.error('Error al agregar contacto:', error);
        alert('Error al agregar el contacto. Inténtalo de nuevo.');
    });
    
    return false; // Prevenir el envío normal del formulario
}