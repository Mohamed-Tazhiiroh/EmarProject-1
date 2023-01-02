const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


const CreateRive = async (req, res) => {
    const { productID, userid, Rating, reaction } = req.body;


    try {

        if (!productID || !userid || !Rating || !reaction) {
            res.json({
                status: "Error",
                message: "Plze provider data"
            })
        }


        const NewRevi = await prisma.Reviews.create({
            data: {
                pro_id: productID,
                UserID: userid,
                body: reaction,
                rating: Rating
            },
            include: {
                product: true,
                user: true,
            },
        })

        res.json({
            NewRevi
        })
    } catch (error) {

        console.log(error),
       res.json({
        status:"Error",
        message:"waxa ayaa qaldan"
       })

    }


}








module.exports = {
    CreateRive
}