//exporting the model for sequelize to create the schema
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers",{

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true 
    },

    burger_name: {
      type: DataTypes.STRING
    },

    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    
    date: {
      type: DataTypes.DATE
    }

  },

  {
    timestamps: false
  });

  return Burgers;

};
