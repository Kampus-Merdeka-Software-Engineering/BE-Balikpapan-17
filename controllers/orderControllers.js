const { orderServices } = require("../services");
async function getOrders(req, res) {
  const orders = await orderServices.getAllOrders();

  res.status(200).json(orders);
}

async function createOrders(req, res) {
  const order = req.body;

  const createdOrders = await orderServices.createOrder(order);

  res.status(201).json({
    massage: "order created",
  });

  
}

module.exports = {
    getOrders,
    createOrders,
  };
