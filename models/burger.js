module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers",{

    id: {
      type: DataTypes.INTEGER,
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
    timestamp: false
  });

  return Burgers;

};
