import axios from '../axios';
import handleError  from '../errors/handle-errors';

async function getSessionsDurationByGender(genderId) {
    return await axios
        .get(`/user-behavior/total-sessions-duration/gender/${genderId}`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getTotalSessionsDuration() {
    return await axios
        .get(`/user-behavior/total-sessions-duration`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getAverageSessionsDuration() {
    return await axios
        .get(`/user-behavior/average-sessions-duration`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getAllSocialInteractions() {
    return await axios
        .get(`/user-behavior/social-interactions`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getAverageSocialInteractions() {
    return await axios
        .get(`/user-behavior/average-social-interactions`, { params: { active: true } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

export {
  getSessionsDurationByGender,
  getTotalSessionsDuration,
  getAverageSessionsDuration,
  getAllSocialInteractions,
  getAverageSocialInteractions,
};
