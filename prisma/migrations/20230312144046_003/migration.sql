/*
  Warnings:

  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.

*/
-- AlterTable
ALTER TABLE `Token` MODIFY `token` VARCHAR(255) NOT NULL,
    ALTER COLUMN `expires_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `User` MODIFY `email` VARCHAR(128) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL;
