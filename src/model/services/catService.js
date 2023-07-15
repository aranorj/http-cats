const catRepository = require('../repositories/catRepository');

async function getAllCatsSorted() {
  try {
    const cats = await catRepository.findAllCats();
    cats.sort(() => Math.random() - 0.5);
    return cats;
  } catch (error) {
    console.error(error.message + error);
    throw error;
  }
}

async function getCatByCode(errorCode) {
  try {
    const cat = await catRepository.findCatByCode(errorCode);
    if (cat == null) {
      const error = new Error('Not Found');
      error.status = 404;
      throw error;
    }
    return cat;
  } catch (error) {
    console.error(error.message + error);
    throw error;
  }
}

module.exports = {
  getAllCatsSorted,
  getCatByCode
};