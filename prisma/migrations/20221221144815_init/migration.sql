/*
  Warnings:

  - You are about to drop the column `SubcategoryID` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `userid` on the `products` table. All the data in the column will be lost.
  - Added the required column `SubID` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserID` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_SubcategoryID_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_userid_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "SubcategoryID",
DROP COLUMN "userid",
ADD COLUMN     "SubID" INTEGER NOT NULL,
ADD COLUMN     "UserID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_SubID_fkey" FOREIGN KEY ("SubID") REFERENCES "SubCategory"("SubID") ON DELETE RESTRICT ON UPDATE CASCADE;
