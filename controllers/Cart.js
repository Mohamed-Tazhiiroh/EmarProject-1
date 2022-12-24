const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

//===========================================================>AddCarts
export const AddCart = async (req, res) => {
    const { UserID } = req.User;
    const { Pro_id } = req.body;
    try {
        const product = await prisma.findfirst({
            where: {
                Pro_id: Pro_id,
            },
        });
        const Existingproduct = await prisma.cart.findFirst({
            where: {
                Pro_id: Pro_id,
                UserID: UserID
            },


            include: {
                products: true
            }

        });

        if (Existingproduct) {
            const UPdatepro = await prisma.cart.update({
                where: {
                    Cart_ID: Existingproduct.Cart_ID,
                },
                data: {
                    qty: Existingproduct.qty === product.inStock
                        ? Existingproduct.qty : Existingproduct.qty + 1,
                },
                include: {
                    products: true
                },


            });
            res.json({
                UPdatepro,
                productMax: UPdatepro.qty === product.inStock,
                success: true
            });



        } else {
            const NewItem = await prisma.cart.create({
                data: {
                    Pro_id,
                    UserID
                },
                include: {
                    products: true,
                },
            });

            res.json({
                success: true,
                NewItem,

            })

        }
    } catch (error) {
        console.log(error)
        res.json({
            status: "error",
            message: "Maybe Mistake is Happeneding"
        })
    }
}


//===========================================================>GetmyCart
export const GetMycart = async (req, res) => {
    const { UserID } = req.User;
    try {
        const Mycart = await prisma.cart.findMany({
            where: {
                UserID: UserID
            },
            include: {
                products: true
            },
        });
        res.json({
            success: true,
            Mycart
        })
    } catch (error) {
        console.log(error);

    }

}

//====================================================/=====>>DeleteAllCarts==>> =>>

export const DeleteAllCarts = async (req, res) => {
    try {
        const { UserID } = req.User;
        const DeleCarts = await prisma.cart.deleteMany({
            where: {
                UserID: UserID
            },
        });
        res.json({
            reset: true,
            DeleCarts
        })
    } catch (error) {

    }
}


//==========================================================>>DeleteItem  =>> ==>>

export const DeleteItem = async (req, res) => {
    try {
        const { UserID } = req.User;
        const { Cart_ID } = req.body;
        const delcart = await prisma.cart.delete({
            where: {
                id: Cart_ID,
            },
        });
        res.json({
            delete: true,
            update: true
        })
    } catch (error) {
        console.log(error)
    }
}