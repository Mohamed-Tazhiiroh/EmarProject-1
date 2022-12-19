const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();




// =========================================================>CreateCategory
const CreateCategory = async (req, res) => {
    try {
        const { typ, img } = req.body;


        if (!typ || !img) {
            res.json({
                status: "Something is worng",
                message: "please Checking Data"
            });
            return;

        }

        const NewCate = await prisma.Category.create({
            data: {
                type: typ,
                images: img,
                CatID: req.Users

            },
        });
        res.json({
            status: "Success",
            message: "Sucessfully save",
            NewCate
        })

    } catch (error) {
        console.log(Error)
    }
};

// =========================================================>UpdateCategory

const UpdateCategory = async (req, res, next) => {
    try {
        const { typ, img } = req.body;
        const { cat_ID } = req.params
        if (!typ || !img) {
            res.json({
                status: "Erorr",
                message: "please checking Data "
            })
            return;
        }
        const FINDUser = await prisma.Category.findFirst({
            where: {
                cat_ID: + cat_ID,
            }
        });
        if (!FINDUser) {
            res.json({
                status: "Erorr",
                message: "Category Is not Found In Database"
            })
            return
        }
        const updateusers = await prisma.Category.update({
            where: {
                cat_ID: parseInt(cat_ID)
            },
            data: {
                type: typ,
                images: img,
            },
        });
        res.status(200).json({
            status: "Sucess",
            message: "Update Sucessfully",
            updateusers
        })
    } catch (error) {
        res.json({
            status: "Erorr",
        });
    }
};

//==========================================================>>GetOneCategory
//

const GetOneCAte = async (req, res) => {
    try {
        const { cat_ID } = req.params;
        const OneCt = await prisma.Category.findFirst({
            where: {
                cat_ID: +cat_ID,
            },
        });
        if (!OneCt) {
            res.json({
                status: "Erorr",
                message: "user is not fount in Database Now"
            });
        } else {
            res.json({
                status: "Success",
                OneCt
            })
        }
    } catch (error) {
        console.log(error)
    };
}


//==========================================================>>GetallCategory

const GetallCategory = async (req, res) => {
    try {
        const Geting = await prisma.Category.findMany();
        res.json({
            Geting
        });
    } catch (error) {
        res.json({
            status: "Error",
            message: "Data is not Found"
        });
    }
};



//==========================================================>>Deletecategory


const Deletecategry = async (req, res,) => {
    try {
        const { cat_ID } = req.params;

        const Done = await prisma.Category.delete({
            where: {
                cat_ID: parseInt(cat_ID)
            },
        });
        res.json({
            status:"Success",
            message:"Delete Category",
            Done
        })
    } catch (error) {
   console.log(error)
    }
}














//==================================================>>exports
module.exports =
{
    CreateCategory,
    UpdateCategory,
    GetOneCAte,
    Deletecategry,
    GetallCategory
}