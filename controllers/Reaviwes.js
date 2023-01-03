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
                status: "Error",
                message: "waxa ayaa qaldan"
            })

    }


}


const UpdateReviws = async (req, res, next) => {
    try {
        const { reaction, Rating } = req.body;
        const { Rev_id } = req.params
        if (!reaction || !Rating) {
            res.json({
                status: "Erorr",
                message: "please Provider data "
            })
            return;
        }
        const findreviws = await prisma.Reviews.findFirst({
            where: {
                Rev_id: + Rev_id,
            }
        });
        if (!findreviws) {
            res.json({
                status: "Erorr",
                message: "User Is not Found In Database"
            })
            return
        }


        const UpdateReviws = await prisma.Reviews.update({
            where: {
                Rev_id: parseInt(Rev_id)
            },
            data: {
                body: reaction,
                rating: Rating
            },
            include: {
                product: true,
                user: true
            }
        });
        res.status(200).json({
            status: "Sucess",
            message: "Update Sucessfully",
            UpdateReviws
        })
    } catch (error) {
        res.json({
            status: "Erorr",
        });
    }
};







module.exports = {
    CreateRive,
    UpdateReviws
}