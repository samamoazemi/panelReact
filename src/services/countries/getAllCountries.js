import http from 'services/httpService';

export const GetAllCountries = () => {
  return http.post('/Api/Admin/Country/All');
};