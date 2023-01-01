import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://saavn.me'
  }),
  tagTypes: ['home', 'view', 'search'],
  endpoints: () => ({})
});
export default apiService;
