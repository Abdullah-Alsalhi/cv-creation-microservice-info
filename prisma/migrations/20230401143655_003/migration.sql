/*
  Warnings:

  - You are about to alter the column `user_id` on the `MediaUrl` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `PersonalInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `created_at` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `PersonalInfo` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- DropForeignKey
ALTER TABLE `MediaUrl` DROP FOREIGN KEY `MediaUrl_user_id_fkey`;

-- AlterTable
ALTER TABLE `MediaUrl` MODIFY `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `PersonalInfo` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `MediaUrl` ADD CONSTRAINT `MediaUrl_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `PersonalInfo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
