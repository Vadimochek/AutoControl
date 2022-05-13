const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const authMiddle = require('../middleware/auth.middleware')
const router = Router()



router.get('/', authMiddle, async (req, res) => {
    try {
        const personalInfo = await User.findById(req.user.userId)
        // console.log(personalInfo);
        res.json(personalInfo)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

router.post('/update',  [
    authMiddle,
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
        .isLength({ min: 6 })
], async (req, res) => {
    console.log(req.body);
    try {
        const error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).json({
                    errors: error.array(),
                    message: 'Некорректные данные'
                })
            }
        const { email, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 12);
        await User.updateOne({_id: req.user.userId},{$set: {email, password: hashPassword}})
        res.status(201).json({ message: "Данные обновлены"})
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

module.exports = router