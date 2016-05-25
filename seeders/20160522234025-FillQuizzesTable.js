'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Quizzes', [ 
         { question: 'Capital de Italia', answer: 'Roma',
           createdAt: new Date(), updatedAt: new Date() },
         { question: 'Capital de Portugal', answer: 'Lisboa',
           createdAt: new Date(), updatedAt: new Date() },
         { question: 'Capital de Alemania', answer: 'Berlin',
           createdAt: new Date(), updatedAt: new Date() },
        ]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Quizzes', null, {});
  }
};
