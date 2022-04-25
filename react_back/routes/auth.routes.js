const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')

const router = Router();

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {

            const error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).json({
                    errors: error.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }
            const { email, password } = req.body;
            const alwaysReg = await User.findOne({ email });

            if (alwaysReg) {
                return res.status(400).json({ message: 'Такой пользователь уже есть' })
            }

            const hashPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashPassword })

            await user.save();

            res.status(201).json({ message: 'Пользователь создан' });

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        }
    })

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
     async (req, res) => {
        try {
            const error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).json({
                    errors: error.array(),
                    message: 'Некорректные данные при авторизации'
                })
            }
            const { email, password } = req.body;
            
            const user = await User.findOne({email});

            if (!user) {
                return res.status(400).json({ message: 'Такой пользователь не найден' })
            }

            const checkPass = await bcrypt.compare(password, user.password);

            if (!checkPass){
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова'})
            }
            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id});
           

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        }

})

module.exports = router;