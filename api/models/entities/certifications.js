const certificateModel = (sequelize, {DataTypes}) => {
    const certification = sequelize.define('Certification', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    certification.associate = (models) => {
        certification.belongsTo(models.User);
    };
        
    return certification;

};

export default certificateModel;