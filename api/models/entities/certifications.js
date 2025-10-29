const certificateModel = (sequelize, {DataTypes}) => {
    const certification = sequelize.define('Certification', {
        certificate1: {
            type: DataTypes.STRING,
            allowNull: false,
            valide: {
                notEmpty: true
            }
        },
            certificate2: {
            type: DataTypes.STRING,
            allowNull: false,
            valide: {
                notEmpty: true
            }
        },
            certificate3: {
            type: DataTypes.STRING,
            allowNull: false,
            valide: {
                notEmpty: true
            }
        },
    });
    return certification;

};

export {certificateModel};