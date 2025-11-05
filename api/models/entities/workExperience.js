const workExpModel = (sequelize, {DataTypes}) => {
    const workExp = sequelize.define('WorkExperience', {
        currentJob:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: false,
            valide:{
                notEmpty: true,
            }
        },
        companyName:{
            type:DataTypes.STRING,
            allowNull: false,
            valide:{
                notEmpty: true,
            }
        },

        description: {
            type:DataTypes.STRING,
            allowNull: false,
            valide:{
                notEmpty: true,
            }
        },

        startDate:{
            type:DataTypes.DATE,
            unique: true,
            allowNull: false,
            valide:{
                notEmpty: true
            }
        }

    });

    workExp.associate = (models) => {
        workExp.belongsTo(models.User);
    };

    return workExp;
};

export default workExpModel;