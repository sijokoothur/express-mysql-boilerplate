module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    name: 'test',
                    email: 'test@test.com',
                },
            ],
            {},
        );
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Users', null, {});
    },
};
