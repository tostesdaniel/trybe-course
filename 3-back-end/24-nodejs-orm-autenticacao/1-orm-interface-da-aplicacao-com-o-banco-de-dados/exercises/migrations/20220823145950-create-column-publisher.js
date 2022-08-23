module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'publisher', {
      allowNull: false,
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Books', 'publisher');
  },
};
