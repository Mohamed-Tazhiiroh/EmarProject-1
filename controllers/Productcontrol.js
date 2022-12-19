const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


//=================================================>>CreateProducts
const CreateProduct = async (req, res) => {
    try {
        const { name, price, des, dis, img, qtity, } = req.body;
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
                userid: req.Users,
                cate_id: req.Users
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
                Pro_disc: dis,
                Pro_images:img,
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




module.exports = {
    CreateProduct,
    UpdateProducts
}