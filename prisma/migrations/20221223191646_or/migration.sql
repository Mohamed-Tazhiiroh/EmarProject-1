/*
  Warnings:

  - Added the required column `Cart_ID` to the `Oreds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Oreds" ADD COLUMN     "Cart_ID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Oreds" ADD CONSTRAINT "Oreds_Cart_ID_fkey" FOREIGN KEY ("Cart_ID") REFERENCES "cart"("Cart_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
