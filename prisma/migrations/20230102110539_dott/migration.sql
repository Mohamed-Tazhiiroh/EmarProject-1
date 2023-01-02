/*
  Warnings:

  - You are about to drop the column `user_id` on the `Reviews` table. All the data in the column will be lost.
  - Added the required column `UserID` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_user_id_fkey";

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "user_id",
ADD COLUMN     "UserID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "Users"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;
