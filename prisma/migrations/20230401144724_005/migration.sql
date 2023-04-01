/*
  Warnings:

  - You are about to drop the column `user_id` on the `MediaUrl` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - A unique constraint covering the columns `[info_id]` on the table `MediaUrl` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `info_id` to the `MediaUrl` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `MediaUrl` DROP FOREIGN KEY `MediaUrl_user_id_fkey`;

-- AlterTable
ALTER TABLE `MediaUrl` DROP COLUMN `user_id`,
    ADD COLUMN `info_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `PersonalInfo` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `MediaUrl_info_id_key` ON `MediaUrl`(`info_id`);

-- AddForeignKey
ALTER TABLE `MediaUrl` ADD CONSTRAINT `MediaUrl_info_id_fkey` FOREIGN KEY (`info_id`) REFERENCES `PersonalInfo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
