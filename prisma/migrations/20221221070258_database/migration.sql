/*
  Warnings:

  - You are about to drop the column `CatID` on the `Category` table. All the data in the column will be lost.
  - Added the required column `UserID` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_CatID_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "CatID",
ADD COLUMN     "UserID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;
