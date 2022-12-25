/*
  Warnings:

  - You are about to drop the column `CartID` on the `Oreds` table. All the data in the column will be lost.
  - Added the required column `Cart_ID` to the `Oreds` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Oreds" DROP CONSTRAINT "Oreds_CartID_fkey";

-- AlterTable
ALTER TABLE "Oreds" DROP COLUMN "CartID",
ADD COLUMN     "Cart_ID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Oreds" ADD CONSTRAINT "Oreds_Cart_ID_fkey" FOREIGN KEY ("Cart_ID") REFERENCES "cart"("Cart_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
