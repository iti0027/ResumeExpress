const certificateModel = (sequelize, {DataTypes}) => {
    const certification = sequelize.define('Certification', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            valide: {
                notEmpty: true
            }
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: false,
            valide: {
                notEmpty: true
            }
        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: false,
            valide: {
                notEmpty: true
            }
        },
    });

    certification.associate = (models) => {
        certification.belongsTo(models.user);
    };
        
    return certification;

};

export default certificateModel;