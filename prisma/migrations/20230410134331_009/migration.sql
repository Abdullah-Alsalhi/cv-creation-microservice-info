/*
  Warnings:

  - You are about to alter the column `created_at` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- DropIndex
DROP INDEX `MediaUrl_github_key` ON `MediaUrl`;

-- DropIndex
DROP INDEX `MediaUrl_linkedin_key` ON `MediaUrl`;

-- DropIndex
DROP INDEX `MediaUrl_personal_key` ON `MediaUrl`;

-- AlterTable
ALTER TABLE `PersonalInfo` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL;
