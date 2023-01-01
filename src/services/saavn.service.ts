import apiService from './api.service';

export const saavn = apiService.injectEndpoints({
  endpoints: build => ({
    home: build.query({
      providesTags: ['home'],
      query: (language = 'hindi') => `/modules?language=${language}`
    }),

    view: build.query({
      providesTags: ['view'],
      query: ({ type, id }) => `/${type}s?id=${id}`
    }),

    search: build.query({
      providesTags: ['search'],
      query: search => `/search/${search.type}s?query=${search.search}`
    })
  }),
  overrideExisting: true
});
export const { useHomeQuery, useViewQuery, useSearchQuery } = saavn;
