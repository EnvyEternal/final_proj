
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Selects', {
      type: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      describe: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Selects');
  },
};
