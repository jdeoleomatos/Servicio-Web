import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Contacts = sequelize.define('Contacts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    telefono:{
        type: DataTypes.STRING,
        allowNull: false
    }},{
        timestamps: false,
}
);