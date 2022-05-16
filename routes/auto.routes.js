const { Router } = require('express')
const Auto = require('../models/Auto')
const authMiddle = require('../middleware/auth.middleware')
const router = Router()



router.get('/', authMiddle, async (req, res) => {
    try {
        const autos = await Auto.find({ "owner": req.user.userId})
        console.log(autos);
        res.json(autos)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

router.get('/:id', authMiddle, async (req, res) => {
    try {
        const auto = await Auto.findById(req.params.id)
        res.json(auto)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

module.exports = router