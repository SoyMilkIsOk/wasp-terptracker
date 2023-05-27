/*
  Warnings:

  - A unique constraint covering the columns `[id,username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "username" TEXT NOT NULL DEFAULT 'Unknown';

-- CreateIndex
CREATE UNIQUE INDEX "User_id_username_key" ON "User"("id", "username");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_username_fkey" FOREIGN KEY ("userId", "username") REFERENCES "User"("id", "username") ON DELETE CASCADE ON UPDATE CASCADE;
