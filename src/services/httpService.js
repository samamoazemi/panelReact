import axios from 'axios';

axios.defaults.baseURL = 'https://hotelbook.travel';

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
