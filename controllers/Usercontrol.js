const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const Jwt = require("jsonwebtoken")

//Token Generate

const generatTokent = (Users) => {
    return Jwt.sign({ Users }, process.env.Jwt_SEC, {
        expiresIn: "10d"
    })
}


const Registertion = async (req, res, next) => {
    try {
        const { Fname, Lname, Email, Password, Phone, Adderss } = req.body;
        if (!Fname || !Lname || !Email || !Password || !Phone || !Adderss) {
            res.json({
                status: "Something is wrong",
                message: "Please Checking Data"
            })
            return;
        }
        const Salt = bcrypt.genSaltSync(20)
        const Hidepassword = bcrypt.hashSync(Password, Salt)
        const NewUser = await prisma.Users.create({
            data: {
                Firstname: Fname,
                lastname: Lname,
                u_email: Email,
                u_password: Hidepassword,
                u_phone: Phone,
                u_addres: Adderss
            },
        });

        req.json({
            status: "Succes",
            message: "SuccessFuly Registertion",
            NewUser

        })
        const Token = generatTokent(NewUser.UserID)
        res.json({
            user: { ...NewUser },
            Token,
            status: "Success"
        })

    } catch (error) {
        error
    }
}



module.exports = {
    Registertion
}