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

const GetingOneData = async (req, res) => {
    try {
        const { cat_ID } = req.params;
        const Oneitem = await prisma.Category.findFirst({
            where: {
                cat_ID: +cat_ID,
            },
        });
        if (!Oneitem) {
            res.json({
                status: "Error",
                message: "Category is not Found In Database"
            });
        } else {
            res.json({
                status: "Success",
                Oneitem
            });
        };
    } catch (error) {
        console.log(error)
    }
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

const Deletecategory = async (req, res,) => {
    const { cat_ID } = req.params;

    const DeleteCate = prisma.Category.delete({
        where: {
            cat_ID:parseInt(cat_ID)
        },
    });
    res.json({
        status: "Success",
        message: "Delete category",
        DeleteCate
    })
}

















//==================================================>>exports
module.exports =
{
    CreateCategory,
    UpdateCategory,
    GetingOneData,
    Deletecategory,
    GetallCategory
}