const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');

//Token Generator
const generatetToken = (Users) => {
    return Jwt.sign({ Users }, process.env.JWT_SEC, {
        expiresIn: "40d"
    })
}

//==========================Registertion start============================>


const Registertion = async (req, res) => {
    try {
        const { fname, lname, email, password, phone, address } = req.body;


        if (!fname || !lname || !email || !password || !phone || !address) {
            res.json({
                status: "Something is worng",
                message: "please Checking Data"
            });
            return;

        }
        const salt = bcrypt.genSaltSync(10)
        const Hidepassword = bcrypt.hashSync(password, salt)
        const Newuser = await prisma.Users.create({
            data: {
                Firstname: fname,
                lastname: lname,
                u_email: email,
                u_password: Hidepassword,
                u_phone: phone,
                u_addres: address,
                Role: email === "cabdiraxmaanxikam190gmail.com" ? "supperadmin" : "user"
            },
        });
        // res.json({
        //     status: "Success",
        //     message: "Sucessfully save",
        //     Newuser
        // })
        const token = generatetToken(Newuser.UserID)
        res.json({
            user: { ...Newuser },
            token,
            status: "Success",
        });
    } catch (error) {
        console.log(error)
    }


};

//=========================================================Loging=========================================================================>

const Login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({
            status: "Error",
            message: "email or password is wrong"
        })
        return;
    }

    const UserExisting = await prisma.Users.findFirst({
        where: {
            u_email: email
        },
        // select: {
        //     UserID: true,
        //     email: true,
        //     password: true,
        //     Role: true
        // }
    });

    if (!UserExisting) {
        res.json({
            status: "Error",
            message: " Wrong credentails"
        });
        return;
    }

    const dehshepassword = bcrypt.compareSync(password, UserExisting.u_password);
    if (dehshepassword) {
        const token = generatetToken(UserExisting.UserID);
        res.json({
            status: "SuccessFully",
            message: "You  Are Login",
            token,
            user: UserExisting,
        });


    } else {
        console.log(error)
        res.json({
            status: "error",
            message: " oh "
        })
    }
}





//========================================================update ==========================================================================>

const UpdateUser = async (req, res, next) => {
    try {
        const { fname, lname, address } = req.body;
        const { UserID } = req.params
        if (!fname || !lname || !address) {
            res.json({
                status: "Erorr",
                message: "please checking Data "
            })
            return;
        }
        const FINDUser = await prisma.Users.findFirst({
            where: {
                UserID: + UserID,
            }
        });
        if (!FINDUser) {
            res.json({
                status: "Erorr",
                message: "User Is not Found In Database"
            })
            return
        }
        const updateusers = await prisma.Users.update({
            where: {
                UserID: parseInt(UserID)
            },
            data: {
                Firstname: fname,
                lastname: lname,
                u_addres: address
            },
        });
        res.status(200).json({
            status: "Sucess",
            message: "Update Sucessfully",
            updateusers
        })
    } catch (error) {
        console.log(error)
    }
};



//=========================================================Get one user =================================================================>

const GetOneuser = async (req, res) => {
    try {
        const { UserID } = req.params;
        const user = await prisma.Users.findFirst({
            where: {
                UserID: +UserID,
            },
        });
        if (!user) {
            res.json({
                status: "Erorr",
                message: "user is not fount in Database Now"
            });
        } else {
            res.json({
                status: "Success",
                user
            })
        }
    } catch (error) {
        res.json({
            Error
        });
    };
}

//=========================================================Delete Users===================================================================>
const DeleteUser = async (req, res,) => {
    const { UserID } = req.params;

    const USRER = await prisma.Users.delete({
        where: {
            UserID: parseInt(UserID)
        },
    });
    res.json({
        status: "Success",
        message: "Users Delete SuccessFull!",
        USRER
    })
}

//==========================================================DeleteAlllUsers===============================================================>
const Getallusers = async (req, res) => {
    try {
        const Users = await prisma.users.findMany();
        res.json({
            Users
        });
    } catch (error) {
        res.json({
            status: "Error",
            message: "Data is not Found"
        });
    }
};

// const DeleteAll = async (req, res) => {
//     try {
//         await prisma.Users.deleteMany();
//         res.json({
//             message: 'All posts were delete',
//         });
//     } catch (error) {
//         console.log(error)
//     }
// };

//=========================================================Geting Data====================================================================>



//=======================================================================================================================================>>
const UpdateRole = async (req, res,) => {
    try {
        const { UserID, Role } = req.body;

        // if (req.Users.Role !== "Admin") {
        //     res.json({
        //         status: "Error",
        //         message: "You are not allowed"
        //     })
        //     return;
        // }


        if (!Role) {
            res.json(
                {
                    status: "Error",
                    message: "Fadlan Ku dar Role ka || plze add to role"
                })


            return;


        }


        const UpdateRoles = await prisma.Users.update({
            where: {
                UserID
            },

            data: {
                Role: Role,
                // UserID: req.Users.UserID
            }
        });
        res.json({
            status: "Success",
            message: "Updated Role Successfuly",
            UpdateRoles
        })
    } catch (error) {
        console.log(error)
    }
}


//=========================================================Exports=======================================================================>

module.exports = {
    Registertion,
    Login,
    Getallusers,
    GetOneuser,
    DeleteUser,
    UpdateUser,
    UpdateRole,
    // DeleteAll
}