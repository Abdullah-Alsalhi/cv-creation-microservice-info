/*
  Warnings:

  - Added the required column `updated_at` to the `MediaInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `contactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `userInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MediaInfo` ADD COLUMN `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `contactInfo` ADD COLUMN `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `userInfo` ADD COLUMN `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `institution_name` VARCHAR(52) NOT NULL,
    `degree` VARCHAR(52) NOT NULL,
    `field_of_study` VARCHAR(255) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` TIMESTAMP NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `education_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
