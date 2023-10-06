-- CreateTable
CREATE TABLE `Resi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resi` VARCHAR(191) NOT NULL,
    `namapengirim` VARCHAR(191) NULL,
    `namapenerima` VARCHAR(191) NULL,
    `alamatpengirim` VARCHAR(191) NULL,
    `alamatpenerima` VARCHAR(191) NULL,
    `telp_pengirim` VARCHAR(191) NULL,
    `telp_penerima` VARCHAR(191) NULL,
    `berat` INTEGER NULL,

    UNIQUE INDEX `Resi_resi_key`(`resi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
