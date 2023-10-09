-- CreateTable
CREATE TABLE `Resi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resi` VARCHAR(191) NOT NULL,
    `namapengirim` VARCHAR(191) NULL,
    `namapenerima` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,

    UNIQUE INDEX `Resi_resi_key`(`resi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id_order` INTEGER NOT NULL AUTO_INCREMENT,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `penerima` VARCHAR(191) NULL,
    `pengirim` VARCHAR(191) NULL,
    `alamatPenerima` VARCHAR(191) NULL,
    `alamatPengirim` VARCHAR(191) NULL,
    `telp_Pengirim` VARCHAR(191) NULL,
    `telp_Penerima` VARCHAR(191) NULL,
    `berat` INTEGER NULL,
    `keterangan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_order`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
