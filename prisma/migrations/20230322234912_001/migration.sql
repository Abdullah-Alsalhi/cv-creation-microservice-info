-- CreateTable
CREATE TABLE `PersonalInfo` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(16) NOT NULL,
    `last_name` VARCHAR(16) NOT NULL,
    `email` VARCHAR(128) NOT NULL,
    `phone` VARCHAR(10) NOT NULL,
    `country` VARCHAR(56) NULL,
    `city` VARCHAR(66) NULL,
    `brief_description` VARCHAR(255) NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` TIMESTAMP NOT NULL,
    `user_id` BIGINT NOT NULL,

    UNIQUE INDEX `PersonalInfo_email_key`(`email`),
    UNIQUE INDEX `PersonalInfo_phone_key`(`phone`),
    UNIQUE INDEX `PersonalInfo_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MediaUrl` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `personal` VARCHAR(255) NULL,
    `linkedin` VARCHAR(255) NULL,
    `github` VARCHAR(255) NULL,
    `user_id` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MediaUrl` ADD CONSTRAINT `MediaUrl_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `PersonalInfo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
