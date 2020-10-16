const messageHelper = require('../../helpers/responseMessage');
const responseHelper = require('../../helpers/response');

const { getAllUsers } = require('./user.service');

const getUsers = async (req, res, next) => {
    try {
        const data = await getAllUsers();
        responseHelper.success(res, messageHelper.usersFetched, data);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getUsers,
};
