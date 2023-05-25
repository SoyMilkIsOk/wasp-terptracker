/*
  Warnings:

  - You are about to drop the column `dominantFlavors` on the `Strain` table. All the data in the column will be lost.
  - You are about to drop the column `effectType` on the `Strain` table. All the data in the column will be lost.
  - You are about to drop the column `terpeneResults` on the `Strain` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Producer" ALTER COLUMN "location" SET DEFAULT 'Unknown',
ALTER COLUMN "contact" SET DEFAULT 'Unknown',
ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "rating" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "comment" SET DEFAULT 'No comment';

-- AlterTable
ALTER TABLE "Strain" DROP COLUMN "dominantFlavors",
DROP COLUMN "effectType",
DROP COLUMN "terpeneResults",
ALTER COLUMN "batchDate" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
