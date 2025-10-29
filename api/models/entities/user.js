const userModel = (sequelize, {DataTypes}) => {
    const user = sequelize.define('User', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            valide:{
                notEmpty: true
            }
        },

        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            valide: {
                notEmpty: true,
            }
        },

        userBirthDate: {
            type: DataTypes.DATE,
            allowNull: false,
            valide: {
                notEmpty: true,
            }
        }


    });

    return user;
};

export {userModel};