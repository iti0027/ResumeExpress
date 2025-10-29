const workExpModel = (sequelize, {DataTypes}) => {
    const workExp = sequelize.define('WorkExperience', {
        currentJob:{
            type:DataTypes.STRING,
            allowNull: false,
            valide:{
                notEmpty: true
            }
        },
        companyName:{
            type:DataTypes.STRING,
            allowNull: false,
            valide:{
                notEmpty: true
        }
        },
        startDate:{
            type:DataTypes.DATE,
            allowNull: false,
            valide:{
                notEmpty: true
            }
        }

    });
    return workExp;
};

export {workExpModel};