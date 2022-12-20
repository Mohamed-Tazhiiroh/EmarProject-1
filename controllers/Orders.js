const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

//====================================================================>>CreateOrders
const CreateOders = async (req, res, next) => {
    try {
        const { D_price, Item_price, Total_price, Address } = req.body;

        if (!D_price || !Item_price || !Total_price || !Address) {
            res.json({
                status: "Error",
                message: "Fadlan iska Dhamaystir Xogta"
            });
            return;
        };

        const NewOders = await prisma.Oreds.create({
            data: {
                Delivery_price: D_price,
                Item_price: Item_price,
                total_price: Total_price,
                address: Address,
                userId: req.Users
            },
        });

        res.json({
            status: "Success",
            message: "Saved Recod",
            NewOders
        })



    } catch (error) {
        console.log(error)
    }
}

//====================================================================>>UpdateOders
const UpdateOrders = async (req, res, next) => {
    try {
        const { D_price, Item_price, Total_price, Address } = req.body;
        const { Ored_id } = req.params
        if (!D_price || !Item_price || !Total_price || !Address) {
            res.json({
                status: "Erorr",
                message: "please checking Data "
            })
            return;
        }
        const Findorders = await prisma.Oreds.findFirst({
            where: {
                Ored_id: + Ored_id,
            }
        });
        if (!Findorders) {
            res.json({
                status: "Erorr",
                message: "Oders Is not Found In Database"
            })
            return
        }
        const updateOrders = await prisma.Oreds.update({
            where: {
                Ored_id: parseInt(Ored_id)
            },
            data: {
                Delivery_price: D_price,
                Item_price: Item_price,
                total_price: Total_price,
                address: Address,
            },
        });
        res.status(200).json({
            status: "Sucess",
            message: "Update Sucessfully",
            updateOrders
        })
    } catch (error) {
        console.log(error)
    }
};

//=====================================================================>>GetAllorders


const Getallorders = async (req, res) => {
    try {
        const getorders = await prisma.Oreds.findMany();
        res.json({
            getorders
        });
    } catch (error) {
        res.json({
            status: "Error",
            message: "Data is not Found"
        });
    }
};


//========================================================================>>GetoneOrders

const Getoneorders = async (req, res) => {
    try {
        const { Ored_id } = req.params;
        const OneOrder = await prisma.Oreds.findFirst({
            where: {
                Ored_id: +Ored_id,
            },
        });
        if (!OneOrder) {
            res.json({
                status: "Erorr",
                message: "Orders is not found in Database"
            });
        } else {
            res.json({
                status: "Success",
                OneOrder
            })
        }
    } catch (error) {
        console.log(error)
    };
}

//=========================================================================>>DeteleOrders

const Deletecategry = async (req, res,) => {
    try {
        const { cat_ID } = req.params;

        const Done = await prisma.Category.delete({
            where: {
                cat_ID: parseInt(cat_ID)
            },
        });
        res.json({
            status: "Success",
            message: "Delete Category",
            Done
        })
    } catch (error) {
        console.log(error)
    }
}






module.exports = {
    CreateOders,
    UpdateOrders,
    Getallorders,
    Getoneorders
}