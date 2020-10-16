const db = require('../../models');

const getAllUsers = async () => {
    const data = await db.user.findAll();
    return data;
};

module.exports = {
    getAllUsers,
};
