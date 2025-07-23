import { Sequelize } from "sequelize";
import db from "../Config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
    "users",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        freezeTableName: true, //opsi tambahan agar nama table pada DB sama dengan model
    }
);

export default Users;
