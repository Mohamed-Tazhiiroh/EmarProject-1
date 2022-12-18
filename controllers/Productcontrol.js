const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();



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


module.exports = {
    CreateProduct
}