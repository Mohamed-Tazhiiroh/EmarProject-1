/*
  Warnings:

  - You are about to drop the column `Cart_ID` on the `Oreds` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Oreds" DROP CONSTRAINT "Oreds_Cart_ID_fkey";

-- AlterTable
ALTER TABLE "Oreds" DROP COLUMN "Cart_ID";
