const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('personaje', {
    id:{
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true
    },
   description: {
type: DataTypes.TEXT
   },
    image:{
      type: DataTypes.TEXT,
      allowNull: false, 
    }
  },
    {timestamps:false}
  );
};
 