import axios from '../axios';
import handleError  from '../errors/handle-errors';

async function getAllTransactionsByGenre(genreId) {
  return await axios
    .get(`/transactions/genre/${genreId}`)
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
    .get(`/transactions/region/${regionId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      handleError(error);
      return error;
    });
};

export { getAllTransactionsByGenre, getAllTransactionsByRegion };