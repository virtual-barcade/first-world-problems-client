import axios from 'axios';

export const sampleFirstWorldProblems = [
  `I think my cat is under-stimulated.`,
  `I had too much to eat and now I'm tired. I think I'll leave work early and take a nap.`,
  `All the dishes in the dishwasher are dirty, so I had to eat my waffles off of a Tupperware lid.`,
  `The restaurant didn't have Coke so I had to order Pepsi.`,
  `I have too much cash in my wallet. It hurts my butt when I sit.`,
  `I spend more time looking for a movie to watch than watching it.`,
  `My roommate ate a hotdog without a bun, now I have an uneven ratio of hotdogs to buns.`,
  `I wanted to catch that pokemon but my pokemon is so strong it knocked it out in the first move.`,
  `My pizza box doesn't fit in the fridge.`,
  `I didn't get extra foam on my pumpkin spice latte.`,
  `I don't have enough dip for my chips. But if I open another container, I won't have enough chips for my dip.`,
  `I want to turn off the lights, but the bed is too comfortable.`,
  `I have no food in my home that can be made in less than two minutes.`,
  `There isn't enough dressing on my salad so now my salad tastes like salad.`,
  `One time my refrigerator stopped working, I didn't know what to do. I just moved.`,
];

export const fetchSong = query =>
  axios.get(`https://first-world-problems-api.herokuapp.com/api/song/${query}`);
