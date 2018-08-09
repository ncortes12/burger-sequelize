

//making a model called burger that sequelize will use to create a table and exporting it in a variable called `burger`.
module.exports = function (sequelize, DataTypes) {
    
    var burger = sequelize.define("burger",{ 
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        
       

    });

    return burger;
    
} 