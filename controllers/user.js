const { response, request } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const getUser = (req = request, res = response) => {

    const { page, limit } = req.query;

    res.json({
        msg: "get API - controller",
        page,
        limit
    });
}

const createUser = async (req = request, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({
        name,
        email,
        password
    });
}

const updateUser = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        msg: "update API - controller",
        id
    });
}

const deleteUser = (req, res = response) => {
    res.json({msg: "delete API - controller"});
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}

