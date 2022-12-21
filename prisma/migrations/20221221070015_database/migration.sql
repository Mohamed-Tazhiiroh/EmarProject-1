/*
  Warnings:

  - You are about to drop the column `images` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `cate_id` on the `products` table. All the data in the column will be lost.
  - Added the required column `subCate` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_cate_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "images";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "cate_id",
ADD COLUMN     "subCate" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "SubCategory" (
    "SubID" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "imase" TEXT NOT NULL,
    "CategoryID" INTEGER NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("SubID")
);

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_CategoryID_fkey" FOREIGN KEY ("CategoryID") REFERENCES "Category"("cat_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_subCate_fkey" FOREIGN KEY ("subCate") REFERENCES "SubCategory"("SubID") ON DELETE RESTRICT ON UPDATE CASCADE;
