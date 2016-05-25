// Definición del modelo de Comments:

module.exports = function(sequelize, DataTypes){
	return sequelize.define('Comment',
							{ text: { type: DataTypes.STRING,
							  validate: { notEmpty: { msg: "Falta comentario" }}
							}
						});
};