module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Book 1',
        author: 'Author 1',
        pageQuantity: 200,
        createdAt: '2022-08-23T11:07:00',
        updatedAt: '2022-08-23T11:07:00',
      },
      {
        title: 'Book 2',
        author: 'Author 1',
        pageQuantity: 303,
        createdAt: '2022-08-23T11:07:01',
        updatedAt: '2022-08-23T11:07:01',
      },
      {
        title: 'Book 3',
        author: 'Author 2',
        pageQuantity: 200,
        createdAt: '2022-08-23T11:07:02',
        updatedAt: '2022-08-23T11:07:02',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
