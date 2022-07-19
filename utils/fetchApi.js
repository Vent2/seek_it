import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '78285d6189mshbb840494d67930cp12aaefjsn2d0f53bfa1d1',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }        
    });
    return data;
}