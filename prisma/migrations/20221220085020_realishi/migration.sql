-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_pro_id_fkey" FOREIGN KEY ("pro_id") REFERENCES "products"("Pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;
