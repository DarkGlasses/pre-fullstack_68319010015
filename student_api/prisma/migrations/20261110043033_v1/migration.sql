-- CreateTable
CREATE TABLE `subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `objective` VARCHAR(50) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `teacher` VARCHAR(50) NOT NULL,
    `credit` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
