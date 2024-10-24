import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Pet extends Model {
  declare id: number;
  declare name: string;
  declare age: number;
  declare breed: string;
  declare color: string;
  declare gender: string;
}

Pet.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING(50), allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    breed: { type: DataTypes.STRING(25), allowNull: false },
    color: { type: DataTypes.STRING(25), allowNull: false },
    gender: { type: DataTypes.STRING(25), allowNull: false },
  },
  {
    tableName: "pets",
    sequelize,
  },
);

export default Pet;
