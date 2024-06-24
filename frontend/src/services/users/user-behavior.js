import axios from '../axios';
import handleError  from '../errors/handle-errors';

async function getSessionsDurationByGenre(genreId) {
    return await axios
        .get(`/user-behavior/total-sessions-duration/genre/${genreId}`, { params: { active: true } })
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
        .get(`/user-behavior/total-sessions-duration`)
        .then((response) => {
            return response.data.total_duration_seconds;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getAverageSessionsDuration() {
    return await axios
        .get(`/user-behavior/average-sessions-duration`)
        .then((response) => {
            return response.data.average_duration_seconds;
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
            return response.data.social_interactions;
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
            return response.data.average_interaction_count;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

export {
  getSessionsDurationByGenre,
  getTotalSessionsDuration,
  getAverageSessionsDuration,
  getAllSocialInteractions,
  getAverageSocialInteractions,
};
