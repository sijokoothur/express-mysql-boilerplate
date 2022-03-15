module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    firstName: 'test',
                    lastName: 'test',
                    email: 'test@test.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ],
            {},
        );
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Users', null, {});
    },
};
