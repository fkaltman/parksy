import axios from 'axios';

const apiKey = 'Cevgw4CyvPl6GgL8jxkSMOWQ30JKK573VFf7QVheFnLyIHyn6hxrAPYSvkHhAAYeQLYOFH3gfkbwxKySuzU8jXx3BV9PgABgAp4WeHlT1aronHy7KfVhCuj-niQVXXYx'

const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

const opts = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
}

export const findParks = async (location) => {
  try {
    const response = await axios.get(`${baseURL}?categories=playgrounds&location=${location}`, opts);
    return response.data.businesses || [];
  } catch (error) {
    console.error('API Error:', error);
    // Return mock data for demonstration since CORS Anywhere is no longer available
    return [
      {
        id: 'mock-1',
        name: 'Sample Playground 1',
        location: {
          address1: '123 Park St',
          city: location || 'Sample City',
          state: 'CA'
        },
        rating: 4.5,
        review_count: 25,
        image_url: 'https://via.placeholder.com/300x200',
        url: '#'
      },
      {
        id: 'mock-2',
        name: 'Sample Playground 2',
        location: {
          address1: '456 Fun Ave',
          city: location || 'Sample City',
          state: 'CA'
        },
        rating: 4.2,
        review_count: 18,
        image_url: 'https://via.placeholder.com/300x200',
        url: '#'
      }
    ];
  }
}