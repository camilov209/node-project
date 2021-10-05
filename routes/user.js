const { Router } = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/user')

const router = Router();

router.get('/all', getUser);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete', deleteUser)

 module.exports = router;