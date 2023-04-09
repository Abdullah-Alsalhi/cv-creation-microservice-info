/*
  Warnings:

  - You are about to alter the column `created_at` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - A unique constraint covering the columns `[personal]` on the table `MediaUrl` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[linkedin]` on the table `MediaUrl` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[github]` on the table `MediaUrl` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `PersonalInfo` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `MediaUrl_personal_key` ON `MediaUrl`(`personal`);

-- CreateIndex
CREATE UNIQUE INDEX `MediaUrl_linkedin_key` ON `MediaUrl`(`linkedin`);

-- CreateIndex
CREATE UNIQUE INDEX `MediaUrl_github_key` ON `MediaUrl`(`github`);
