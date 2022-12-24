/*
  Warnings:

  - You are about to drop the column `DeliverAt` on the `Oreds` table. All the data in the column will be lost.
  - You are about to drop the column `PiadAt` on the `Oreds` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Oreds" DROP COLUMN "DeliverAt",
DROP COLUMN "PiadAt";
