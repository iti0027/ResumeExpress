const userModel = (sequelize, {DataTypes}) => {
    const user = sequelize.define('User', {
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            valide:{
                notEmpty: true,
            },
        },

        userEmail: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            unique: true,
            valide: {
                notEmpty: true,
            },
        },

        userBirthDate: {
            type: DataTypes.DATE,
            unique: true,
            allowNull: false,
            valide: {
                notEmpty: true,
            },
        }


    });

    user.associate = (models) => {
        user.hasMany(models.Certification, {onDelete: "CASCADE"});
    };

    return user;
};

export default userModel;