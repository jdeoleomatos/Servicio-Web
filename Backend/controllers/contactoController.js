import {Contacts } from '../Models/contacto.js';


export async function getContacto(req, res) {
    try {
        const list = await Contacts.findAll();
        res.send(list);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los contactos', error: error.message });
    }
}


export async function addContacto(req, res) {
    const { nombre, apellido, telefono } = req.body;

    try {
        const newContact = await Contacts.create({ // Cambia 'contacto' por 'Contacts'
            nombre,
            apellido,
            telefono
        });
        res.status(201).json(newContact); // Usa JSON para consistencia
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el contacto', error: error.message });
    }
}

