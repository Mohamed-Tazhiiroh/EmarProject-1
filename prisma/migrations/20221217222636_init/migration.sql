/*
  Warnings:

  - You are about to drop the column `userID` on the `Category` table. All the data in the column will be lost.
  - Added the required column `CatID` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_userID_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "userID",
ADD COLUMN     "CatID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_CatID_fkey" FOREIGN KEY ("CatID") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;
