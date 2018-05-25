import axios from 'axios';

export const sampleFirstWorldProblems = [
  `I think my cat is under-stimulated.`,
  `I had too much to eat and now I'm tired. I think I'll leave early and take a nap.`,
  `All the dishes in the dishwasher are dirty, so I had to eat my waffles off of a Tupperware lid.`,
  `The restaurant didn't have Coke so I had to order Pepsi.`,
];

export const fetchSong = query =>
  axios.get(`https://first-world-problems-api.herokuapp.com/api/song/${query}`);
