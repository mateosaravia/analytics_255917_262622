import axios from '../axios';
import handleError  from '../errors/handle-errors';

async function getAllTransactionsByGenre(genreId) {
  return await axios
    .get(`'/transactions/genre/${genreId}`, { params: { active: true } })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      handleError(error);
      return error;
    });
};

async function getAllTransactionsByRegion(regionId) {
  return await axios
    .get(`'/transactions/region/${regionId}`, { params: { active: true } })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      handleError(error);
      return error;
    });
};

export { getAllTransactionsByGenre, getAllTransactionsByRegion };