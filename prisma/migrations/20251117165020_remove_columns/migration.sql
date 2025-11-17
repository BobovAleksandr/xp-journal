/*
  Warnings:

  - You are about to drop the column `cover` on the `UserGame` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `UserGame` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `UserGame` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserGame" DROP COLUMN "cover",
DROP COLUMN "name",
DROP COLUMN "slug";
