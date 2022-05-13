const { Router } = require('express')
const Geo = require('../models/Geo')
const Inside = require('../models/Inside')
const authMiddle = require('../middleware/auth.middleware')
const router = Router()



router.get('/geo', authMiddle, async (req, res) => {
    try {
        const geoInfo = await Geo.find({auto: req.params.id}).sort({ $natural: -1}).limit(3)///продумать
        res.json(geoInfo);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

router.get('/inside', authMiddle, async (req, res) => {//можно сделать так: через url берём id машины и ищем по нему!
    try {
        const insideInfo = await Inside.find({auto: req.params.id}).sort({ $natural: -1}).limit(1)//// id продумать
        res.json(insideInfo);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})


module.exports = router