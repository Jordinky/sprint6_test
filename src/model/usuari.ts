import { Sequelize,DataTypes } from "sequelize";

const sequelize = new Sequelize('jocdaus', 'root', 'passprueba', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  });

const Usuari = sequelize.define('Usuari',{
    id_usuari: {type: DataTypes.INTEGER,primaryKey:true},
    nom_usuari: DataTypes.CHAR,
    data_registre: DataTypes.DATE,
},{tableName:'usuari'});

export default Usuari;