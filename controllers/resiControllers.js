const { resiServices } = require ('../services')

async function getResi(req, res) {
  const resi = await resiServices.getAllResi();
  res.status(200).json(resi);
}

async function getResiByNoResi(req, res) {

const noResi = req.params.noResi;

const resi = await resiServices.getResiByNoResi(noResi);
  res.status(200).json(resi);
}


module.exports = {
  getResi, getResiByNoResi
};

