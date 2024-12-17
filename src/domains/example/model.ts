import { DataTypes } from "sequelize";
import db from "../../database";

db.define("Pet", {
  species: {
    type: DataTypes.CHAR,
    allowNull: false,
    comment: "Species of a pet",
  },

  name: {
    type: DataTypes.CHAR,
    allowNull: false, // defaults to true
    comment: "Name of your furr/scale baby",
  },

  birthdate: {
    type: DataTypes.DATE,
    comment: "Your pets birthday",
  },
});

export default db.models.Example;
