-- CreateTable
CREATE TABLE `userInfo` (
                            `id` INTEGER NOT NULL AUTO_INCREMENT,
                            `first_name` VARCHAR(16) NOT NULL,
                            `last_name` VARCHAR(16) NOT NULL,
                            `country` VARCHAR(56) NULL,
                            `city` VARCHAR(66) NULL,
                            `bio` VARCHAR(255) NULL,
                            `created_at` TIMESTAMP NULL,
                            `updated_at` TIMESTAMP NOT NULL,
                            `user_id` INTEGER NOT NULL,

                            UNIQUE INDEX `userInfo_user_id_key`(`user_id`),
                            PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contactInfo` (
                               `id` INTEGER NOT NULL AUTO_INCREMENT,
                               `email` VARCHAR(128) NOT NULL,
                               `phone` VARCHAR(10) NOT NULL,
                               `created_at` TIMESTAMP NULL,
                               `updated_at` TIMESTAMP NOT NULL,
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
                             `created_at` TIMESTAMP NULL,
                             `updated_at` TIMESTAMP NOT NULL,
                             `user_id` INTEGER NOT NULL,

                             UNIQUE INDEX `MediaInfo_user_id_key`(`user_id`),
                             PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `education` (
                             `id` INTEGER NOT NULL AUTO_INCREMENT,
                             `institution_name` VARCHAR(52) NOT NULL,
                             `degree` VARCHAR(52) NOT NULL,
                             `field_of_study` VARCHAR(255) NOT NULL,
                             `end_date` VARCHAR(191) NULL,
                             `created_at` TIMESTAMP NULL,
                             `updated_at` TIMESTAMP NOT NULL,
                             `user_id` INTEGER NOT NULL,

                             UNIQUE INDEX `education_user_id_key`(`user_id`),
                             PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experience` (
                              `id` INTEGER NOT NULL AUTO_INCREMENT,
                              `company_name` VARCHAR(255) NOT NULL,
                              `job_title` VARCHAR(255) NOT NULL,
                              `description` VARCHAR(255) NOT NULL,
                              `start_date` VARCHAR(7) NOT NULL,
                              `end_date` VARCHAR(7) NOT NULL,
                              `location` VARCHAR(128) NOT NULL,
                              `created_at` TIMESTAMP NULL,
                              `updated_at` TIMESTAMP NOT NULL,
                              `user_id` INTEGER NOT NULL,

                              INDEX `user_id_index`(`user_id`),
                              UNIQUE INDEX `experience_user_id_company_name_job_title_key`(`user_id`, `company_name`, `job_title`),
                              PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skill` (
                         `id` INTEGER NOT NULL AUTO_INCREMENT,
                         `name` VARCHAR(32) NOT NULL,
                         `created_at` TIMESTAMP NULL,
                         `updated_at` TIMESTAMP NOT NULL,
                         `user_id` INTEGER NOT NULL,

                         UNIQUE INDEX `skill_user_id_name_key`(`user_id`, `name`),
                         PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project` (
                           `id` INTEGER NOT NULL AUTO_INCREMENT,
                           `name` VARCHAR(255) NOT NULL,
                           `description` VARCHAR(255) NOT NULL,
                           `created_at` TIMESTAMP NULL,
                           `updated_at` TIMESTAMP NOT NULL,
                           `user_id` INTEGER NOT NULL,

                           UNIQUE INDEX `project_user_id_name_key`(`user_id`, `name`),
                           PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
