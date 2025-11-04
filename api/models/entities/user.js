const userModel = (sequelize, {DataTypes}) => {
    const user = sequelize.define('User', {
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate:{
                notEmpty: true,
            },
        },

        userEmail: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            },
        },

        userBirthDate: {
            type: DataTypes.DATEONLY,
            unique: true,
            allowNull: false,
            validate: {
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