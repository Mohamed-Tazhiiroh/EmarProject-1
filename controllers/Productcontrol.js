const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


//=================================================>>CreateProducts
const CreateProduct = async (req, res) => {
    try {
        const { name, price, des, dis, img, qtity, cate_id } = req.body;
        if (!name || !price || !des || !dis || !img || !qtity) {
            res.json({
                status: "Error",
                message: "Plze Provider Data"
            })
            return;
        }
        const Newproduct = await prisma.products.create({
            data: {
                Pro_name: name,
                Pro_price: price,
                Pro_desc: des,
                Pro_disc: dis,
                Pro_images: img,
                Pro_qtity: qtity,
                user: req.Users,
                cate_id: cate_id ? Number(cate_id) : 1,
            },
        });
        res.json({
            status: "Success",
            message: "Saved Product",
            Newproduct
        })
    } catch (error) {
        console.log(error)
    }
}

//==================================================>> UpdateProduct

const UpdateProducts = async (req, res, next) => {
    try {
        const { name, price, des, dis, img, qtity, } = req.body;
        const { Pro_id } = req.params
        if (!name || !price || !des || !dis || !img || !qtity) {
            res.json({
                status: "Erorr",
                message: "please checking Data "
            })
            return;
        }
        const FindProduct = await prisma.products.findFirst({
            where: {
                Pro_id: + Pro_id,
            }
        });
        if (!FindProduct) {
            res.json({
                status: "Erorr",
                message: "Product  Is not Found In Database"
            });
            return
        }
        const Produc = await prisma.products.update({
            where: {
                Pro_id: parseInt(Pro_id)
            },
            data: {
                Pro_name: name,
                Pro_price: price,
                Pro_desc: des,
                Pro_images: img,
                Pro_disc: dis,
                Pro_qtity: qtity

            },
        });
        res.status(200).json({
            status: "Sucess",
            message: "Update Sucessfully",
            Produc
        })
    } catch (error) {
        console.log(error)
    }
};

//==================================================>> GetoneProduct

const GetoneProdut = async (req, res) => {
    try {
        const { Pro_id } = req.params;
        const PRODUCT = await prisma.products.findFirst({
            where: {
                Pro_id: +Pro_id,
            },
        });
        if (!PRODUCT) {
            res.json({
                status: "Erorr",
                message: "Product is not Found in Database"
            });
        } else {
            res.json({
                status: "Success",
                PRODUCT
            })
        }
    } catch (error) {
        res.json({
            Error
        });
    };
}

//===================================================>>GetAllpro
const Getallproduct = async (req, res) => {
    try {
        const PRO = await prisma.products.findMany();
        res.json({
            PRO
        });
    } catch (error) {

        console.log(error)
        // res.json({
        //     status: "Error",
        //     message: "Data is not Found"
        // });
    }
};


//====================================================>>Deleteproduct

const Deletepro = async (req, res,) => {
    const { Pro_id } = req.params;

    const Pro = await prisma.products.delete({
        where: {
            Pro_id: parseInt(Pro_id)
        },
    });
    res.json({
        status: "Success",
        message: "product  Delete SuccessFull!",
        Pro
    })
}

module.exports = {
    CreateProduct,
    UpdateProducts,
    GetoneProdut,
    Getallproduct,
    Deletepro
}