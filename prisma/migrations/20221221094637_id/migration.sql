/*
  Warnings:

  - You are about to drop the column `subCate` on the `products` table. All the data in the column will be lost.
  - Added the required column `SubcategoryID` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_subCate_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "subCate",
ADD COLUMN     "SubcategoryID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_SubcategoryID_fkey" FOREIGN KEY ("SubcategoryID") REFERENCES "SubCategory"("SubID") ON DELETE RESTRICT ON UPDATE CASCADE;
