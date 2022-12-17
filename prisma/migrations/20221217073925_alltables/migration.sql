-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('Admin', 'supperadmin', 'user');

-- CreateEnum
CREATE TYPE "mon" AS ENUM ('ispaid', 'notpaid');

-- CreateTable
CREATE TABLE "Users" (
    "UserID" SERIAL NOT NULL,
    "Firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "u_email" TEXT NOT NULL,
    "u_password" TEXT NOT NULL,
    "u_phone" TEXT NOT NULL,
    "u_addres" TEXT NOT NULL,
    "joidat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Role" "Roles" NOT NULL DEFAULT 'user',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "Oreds" (
    "Ored_id" SERIAL NOT NULL,
    "Delivery_price" INTEGER NOT NULL,
    "Item_price" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Oreds_pkey" PRIMARY KEY ("Ored_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "cat_ID" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("cat_ID")
);

-- CreateTable
CREATE TABLE "products" (
    "Pro_id" SERIAL NOT NULL,
    "Pro_name" TEXT NOT NULL,
    "Pro_price" INTEGER NOT NULL,
    "Pro_desc" TEXT NOT NULL,
    "Pro_images" TEXT NOT NULL,
    "Pro_disc" INTEGER NOT NULL,
    "Pro_qtity" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "cate_id" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("Pro_id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "Rev_id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "pro_id" INTEGER NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("Rev_id")
);

-- CreateTable
CREATE TABLE "cart" (
    "Cart_ID" SERIAL NOT NULL,
    "Quantity" INTEGER NOT NULL DEFAULT 0,
    "UserId" INTEGER NOT NULL,
    "Pro_id" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("Cart_ID")
);

-- AddForeignKey
ALTER TABLE "Oreds" ADD CONSTRAINT "Oreds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_userID_fkey" FOREIGN KEY ("userID") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_cate_id_fkey" FOREIGN KEY ("cate_id") REFERENCES "Category"("cat_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_Pro_id_fkey" FOREIGN KEY ("Pro_id") REFERENCES "products"("Pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;
