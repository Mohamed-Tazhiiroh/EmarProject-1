/*
  Warnings:

  - Added the required column `Item_name` to the `Oreds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Oreds" ADD COLUMN     "Item_name" TEXT NOT NULL;
