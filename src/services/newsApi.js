import {NEWS_API_URL, NEWS_API_HOST, NEWS_API_TOKEN} from '@env';

export const getNintendoNews = () => {
  return fetch(NEWS_API_URL, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': NEWS_API_TOKEN,
      'x-rapidapi-host': NEWS_API_HOST,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      return err;
    });
};
