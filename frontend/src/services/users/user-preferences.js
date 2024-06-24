import axios from '../axios';
import handleError  from '../errors/handle-errors';

async function getTopPreferencesByGenre(genreId) {
    return await axios
        .get(`/user-preferences/genre/${genreId}`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getTopPurchasePreferences() {
    return await axios
        .get(`/user-preferences/purchases`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getTopPurchasePreferencesByRegion(regionId) {
    return await axios
        .get(`/user-preferences/purchases/region/${regionId}`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getAvgReviewByGenre(genreId) {
    return await axios
        .get(`/user-preferences/genre/${genreId}/reviews`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

export { getTopPreferencesByGenre, getTopPurchasePreferences, getTopPurchasePreferencesByRegion, getAvgReviewByGenre };