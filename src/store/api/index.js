import axios from 'axios';

//https://pixabay.com/api/?key=${API_TOKEN}&q=${searchValue}&per_page=15

const URL = 'https://pixabay.com/api/';
const API_TOKEN = '13692591-7dae44556281be3888ed946cc';

export const getImages = async (term, page) => {
  try {
    const response = await axios.get(
      `${URL}?key=${API_TOKEN}&q=${term}&page=${page}&per_page=15`
    );
    // console.log(response);
    return response.data.hits;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
