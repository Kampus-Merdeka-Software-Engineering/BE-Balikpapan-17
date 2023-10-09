const { prisma } = require("../config/prisma");

async function getAllOrders() {
  try {
    const orders = await prisma.orderr.findMany();

    return orders;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

async function createOrders(order) {
  try {
    const mappedOrder = {
      data: {
        penerima: order.penerima,
        pengirim: order.pengirim,
        alamatPenerima: order.alamatPenerima,
        alamatPengirim: order.alamatPengirim,
        telp_Pengirim: order.telp_Pengirim,
        telp_Penerima: order.telp_Penerima,
        berat: order.berat,
        keterangan: order.keterangan,
      },
    };
    const createdOrders = await prisma.orderr.create(mappedOrder);

    return createdOrders;
  } catch (error) {
    console.error(error);

    throw new Error();
  }
}

module.exports = {
  getAllOrders,
  createOrders,
};
