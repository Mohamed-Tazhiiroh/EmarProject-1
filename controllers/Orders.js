const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


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



module.exports={
    CreateOders
}