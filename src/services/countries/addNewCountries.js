import http from 'services/httpService';

export const AddNewCountries = (data) => {
  return http.post('/Api/Admin/Country/Add', data);
};