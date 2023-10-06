const  prisma  = require("../config/prisma.js");

async function getAllResi() {
    try{
        const resi = await prisma.resi.findMany()
        return resi;
    }catch(error){
        console.error(error)
        throw new Error()
    }
}

async function getResiByNoResi(noResi) {
    try {
      const resi = await prisma.resi.findFirst({
        where: {
          resi: noResi
        }
      })
      return resi
    } catch (error) {
      throw new Error(error)
    }
  }
  

module.exports = {
  getAllResi, getResiByNoResi
};
