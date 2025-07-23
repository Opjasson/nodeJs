import { Sequelize } from "sequelize";
import db from "../Config/database.js";
import Users from "./userModel.js";

const { DataTypes } = Sequelize;

const Login = db.define(
    "login",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: false,
            },
        },
        token: {
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

Login.belongsTo(Users, { foreignKey: "userId" });

export default Login;
