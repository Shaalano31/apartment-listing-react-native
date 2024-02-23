import {useEffect, useState} from 'react';
import {MyAxios} from '../api/db';

const APARTMENTS_ENDPOINT = '/apartments';

export const fetchAllApartments = () => {
  return MyAxios.get(APARTMENTS_ENDPOINT)
    .then(response => response.data)
    .catch(error => {
      handleApiError(error, 'Error fetching all apartments');
      throw error;
    });
};

export const fetchSingleApartment = apartmentId => {
  return MyAxios.get(`${APARTMENTS_ENDPOINT}/${apartmentId}`)
    .then(response => response.data)
    .catch(error => {
      handleApiError(error, `Error fetching apartment with id ${apartmentId}`);
      throw error;
    });
};

export const createApartment = apartmentData => {
  return MyAxios.post(APARTMENTS_ENDPOINT, apartmentData)
    .then(response => response.data)
    .catch(error => {
      handleApiError(error, 'Error creating apartment');
      throw error;
    });
};

const handleApiError = (error, message) => {
  if (error.response) {
    console.error(`${message} - Status: ${error.response.status}`);
    console.error('Error response data:', error.response.data);
  } else if (error.request) {
    console.error(`${message} - No response received`);
  } else {
    console.error(`${message} - Error: ${error.message}`);
  }
};
