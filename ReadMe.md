# 🚀 Servicio Web – API Backend con Node.js

Este es un proyecto backend **sencillo** hecho con **Node.js** y **Express**, usando **PostgreSQL** como base de datos. La idea es manejar datos a través de una API REST, conectando con una base de datos real y manteniendo todo limpio y organizado.

---

## 🧠 ¿Qué hace este proyecto?

- Levanta un servidor con Express.
- Conecta con una base de datos PostgreSQL.
- Expone rutas para acceder y modificar información.
- Está pensado como base para proyectos más grandes o pruebas rápidas.

---

## 🧰 Tecnologías que estoy usando

- Node.js
- Express
- PostgreSQL
- pg (cliente para PostgreSQL)
- Git

---

## 🗂 Estructura general

```bash
📁 Servicio-Web/
├── src/
│   ├── index.js         # Punto de arranque del servidor
│   ├── db/              # Conexión a la base de datos
│   ├── routes/          # Rutas de la API
│   └── controllers/     # Lógica de cada endpoint
├── .gitignore
├── package.json
└── README.md


---


## 📥 Cómo clonar este repositorio

Abre tu terminal y ejecuta:

```bash
git clone https://github.com/jdeoleomatos/Servicio-Web.git
cd Servicio-Web
