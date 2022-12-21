const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



//========================================================>>subcategory
const createsubcategory = async (req, res) => {
    try {
        const { typ, img, CAtID } = req.body;


        if (!typ || !img || !CAtID) {
            res.json({
                status: "Something is worng",
                message: "please Checking Data"
            });
            return;

        }

        const NewSubcategory = await prisma.SubCategory.create({
            data: {
                type: typ,
                imase: img,
                CategoryID: CAtID
            },
        });
        res.json({
            status: "Success",
            message: "Sucessfully save",
            NewSubcategory
        })

    } catch (error) {
        console.log(error)
    }


};
//=========================================================>>Updatesubcategory

const Updatesubcategory = async (req, res) => {

    try {
        const { typ, img, } = req.body;
        if (!typ || !img) {
            res.json({
                status: "error",
                message: "Please provider information"
            })
            return;
        }
        const { SubID } = req.params;
        const subCat = await prisma.SubCategory.update({
            where: {
                SubID: Number(SubID),
            },
            data: {
                type: typ,
                imase: img,
            },
        });

        res.json({
            status: "Success",
            message: "Update succesfully",
            subCat
        });
    } catch (error) {
        console.log(error)
    }
};
//=========================================================>> GetoneSubcategory
const Getonesubcategory = async (req, res) => {
    try {
        const { SubID } = req.params;
        const subcate = await prisma.SubCategory.findFirst({
            where: {
                SubID: +SubID,
            },
        });
        if (!subcate) {
            res.json({
                status: "Erorr",
                message: "subcategory is not fount in Database Now"
            });
        } else {
            res.json({
                status: "Success",
                subcate
            })
        }
    } catch (error) {
        res.json({
            Error
        });
    };
}
//=========================================================>>Deletesubcategory
const Deletesubcatgory = async (req, res,) => {
    const { SubID } = req.params;

    const SubCATE = await prisma.SubCategory.delete({
        where: {
            SubID: parseInt(SubID)
        },
    });
    res.json({
        status: "Success",
        message: "subcategory Delete SuccessFull!",
        SubCATE
    })
}


//=========================================================>>Getallsubcategoty
const Getallsubcategory = async (req, res) => {
    try {
        const getting = await prisma.SubCategory.findMany();
        res.json({
            getting
        });
    } catch (error) {
        res.json({
            status: "Error",
            message: "Data is not Found"
        });
    }
};












module.exports = {
    createsubcategory,
    Updatesubcategory,
    Getonesubcategory,
    Deletesubcatgory,
    Getallsubcategory
}