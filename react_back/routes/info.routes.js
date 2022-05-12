const { Router } = require('express')
const User = require('../models/User')
const authMiddle = require('../middleware/auth.middleware')
const router = Router()



router.get('/', authMiddle, async (req, res) => {
    try {
        const personalInfo = await User.findById(req.user.userId)
        console.log(personalInfo);
        res.json(personalInfo)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

router.post('/update', authMiddle, async (req, res) => {
    try {
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

module.exports = router