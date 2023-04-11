/*
  Warnings:

  - You are about to drop the `MediaUrl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonalInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `MediaUrl` DROP FOREIGN KEY `MediaUrl_info_id_fkey`;

-- DropTable
DROP TABLE `MediaUrl`;

-- DropTable
DROP TABLE `PersonalInfo`;

-- CreateTable
CREATE TABLE `userInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(16) NOT NULL,
    `last_name` VARCHAR(16) NOT NULL,
    `country` VARCHAR(56) NULL,
    `city` VARCHAR(66) NULL,
    `bio` VARCHAR(255) NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `userInfo_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contactInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(128) NOT NULL,
    `phone` VARCHAR(10) NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `contactInfo_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MediaInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `personal` VARCHAR(255) NULL,
    `linkedin` VARCHAR(255) NULL,
    `github` VARCHAR(255) NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `MediaInfo_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
