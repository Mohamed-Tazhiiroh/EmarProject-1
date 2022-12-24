-- AlterTable
ALTER TABLE "Oreds" ADD COLUMN     "DeliverAt" TIMESTAMP(3),
ADD COLUMN     "PiadAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Reviews" ALTER COLUMN "body" DROP NOT NULL;
