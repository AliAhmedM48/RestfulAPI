const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const util = require("util");
// const tokenAsPromise = util.promisify(jwt.sign);

const connectDB = require("../db");

module.exports = class UserController {

    async usersGet(req, res, next) {
        //#region 
        try {
            const users = await User.find();
            res.json(users)
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Failed to fetch users', error: err.message });
            next(err);
        }
        //#endregion
    }

    async userGetById(req, res, next) {
        // #region
        await User.findById(req.params.id)
            .then(user => {
                if (!user) return res.status(404).json({ message: 'User not found' });
                res.json(user);
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
                next(err);
            }
            );
        // #endregion
    }

    async userDelete(req, res, next) {
        //#region 
        await User.findByIdAndDelete(req.params.id)
            .then(user => {
                if (!user) return res.status(404).json({ message: 'User not found' });
                res.json(
                    {
                        message: 'User deleted successfully',
                        user: user
                    }
                );
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
                next(err);
            }
            );
        //#endregion
    }
    async userCreate(req, res, next) {
        //#region 
        try {
            const { username, email, password } = req.body;
            const user = req.body;

            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ success: false, message: 'User email already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 12);
            user.password = hashedPassword;
            // Create the user
            const newUser = await User.create({ ...user });

            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: newUser
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to create user', error: err.message });
            next(err);
        }
        //#endregion
    }

    // async loginUser(req, res, next) {
    //#region 
    //     // await this.connect();
    //     const { username, password } = req.body;

    //     await User.findOne({ username }).then(async (user) => {
    //         if (user) {
    //             await bcrypt.compare(password, user.password).then(async (compareResult) => {
    //                 console.log({ compareResult });
    //                 if (compareResult) {
    //                     console.log({ user });
    //                     const secretPrivateKey = 'iti'
    //                     const token = await tokenAsPromise({ username }, secretPrivateKey);
    //                     console.log(token);

    //                     return res.json({
    //                         success: true,
    //                         message: "User logged successfully",
    //                         data: user
    //                     });
    //                     // const token = jwt.sign({ user }, 'iti', { expiresIn: '2h' });
    //                     // console.log({ token });
    //                 }
    //                 else {
    //                     res.json({
    //                         success: true,
    //                         message: "incorrect password",
    //                     });
    //                 }
    //             })
    //         }
    //         else {
    //             res.json({
    //                 success: true,
    //                 message: "log in unsuccessfully",
    //             });
    //         }
    //     });


    //#endregion
    // }
}



