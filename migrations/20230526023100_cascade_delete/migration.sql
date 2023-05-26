-- DropForeignKey
ALTER TABLE "Strain" DROP CONSTRAINT "Strain_producerId_fkey";

-- AddForeignKey
ALTER TABLE "Strain" ADD CONSTRAINT "Strain_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
