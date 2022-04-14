const { Model, DataTypes, UUIDV4 } = require('sequelize');

class Livro extends Model {
  static init(sequelize) {
      super.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        author: DataTypes.STRING,
        ano: DataTypes.INTEGER,
      }, {
          sequelize,
          freezeTableName: true, 
          modelName: 'livro'
      })
  }

  static associate(models) {
  }
}

module.exports = Livro;
