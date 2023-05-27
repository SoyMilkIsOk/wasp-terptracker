/*
  Warnings:

  - You are about to drop the column `username` on the `Review` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_username_fkey";

-- DropIndex
DROP INDEX "User_id_username_key";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "username";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
