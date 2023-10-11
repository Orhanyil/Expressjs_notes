const { JsonWebTokenError } = require("jsonwebtoken")

"use strict"

/*-------------------------------------------
EKSPRESS - PERSONEL API
----------------------------------------------*/

//JWT
//npm i JsonWebToken

const Personnel = require('../models/personnel.model')

module.exports = {

    login: async (req, res) => {

        // 1: 30min -> access -> username, firstname, lastname, profileurl, isAdmin, isLogin
        // 2: 72hour -> refresh -> id, password

        const {username, password} = req.body

        if (username & password) {

            const user = await Personel.findOne({username, password})

            if(user) {
                if (user.isActive) {

                //login OK
                
                    const jwtData = {

                        _id: user._id,
                        departmentId: user.departmentId,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        isActive: user.isActive,
                        isAdmin: user.isAdmin,
                        isLead: user.isLead,
                    }

                    const refreshData = {

                        
                    }

                } else {
                    res.errorStatusCode = 401
                    throw new Error('This account is not active.')
                }
            } else {
                res.errorStatusCode = 401
                throw new Error('This account is not active.')
            }
        } else {
            res.errorStatusCode = 401
            throw new Error('This account is not active.')
        }

    },

    refresh: async (req, res) => {
        
    },

    logout: async (req, res) => {
        
    }

}