const BASE_API_URL = process.env.BASE_API_URL || (typeof global !== 'undefined' && global.BASE_API_URL) || 'https://pokeapi.co/api/v2/';

export default {
  BASE_API_URL,
};
