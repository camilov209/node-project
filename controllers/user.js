const { response, request } = require('express');

const getUser = (req = request, res = response) => {

    const { page, limit } = req.query;

    res.json({
        msg: "get API - controller",
        page,
        limit
    });
}

const createUser = (req = request, res = response) => {
    const { name, age } = req.body;
    res.json({
            msg: "post API - controller",
            name,
            age
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

