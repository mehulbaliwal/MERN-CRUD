import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const task=sequelize.define('Task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    details:{
        type:DataTypes.STRING,
        allowNull:true
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false
    }
});

export default task;