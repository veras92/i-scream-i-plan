import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const reviews = [
  {
    id: 1,
    name: "Olena Doe",
    photo: "images/Olena.png",
    rating: 4,
    text: "GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.",
  },
  {
    id: 2,
    name: "Alexander Hubbard",
    photo: "images/Alexander.png",
    rating: 3,
    text: "GooseTrack is incredibly helpful, the sidebar with account management, calendar, and filter options make navigation seamless. Great for staying organized.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    photo: "images/Bob.jpg",
    rating: 5,
    text: "If you're looking for a task management tool that's easy to use and packed with features, GooseTrack is the way to go. The sidebar makes it simple to switch between tasks and the filtering options are a huge time saver. I highly recommend it!",
  },
  {
    id: 4,
    name: "Jack Hook",
    photo: "images/Jack.jpg",
    rating: 4,
    text: "I've been using GooseTrack for a few months now and it's been a game changer for me. The interface is intuitive and the sidebar provides quick access to everything I need. It's made a big difference in how I manage my workload.",
  },
  {
    id: 5,
    name: "Nicki Colt",
    photo: "images/Nicki.jpg",
    rating: 3,
    text: "I love using GooseTrack to manage my work and personal tasks. The sidebar is a lifesaver and the calendar feature is especially useful for staying on top of deadlines. I don't know how I managed without it!",
  },
  {
    id: 6,
    name: "Mike Proper",
    photo: "images/Mike.jpg",
    rating: 5,
    text: "GooseTrack is incredibly helpful for keeping track of my tasks and projects. The sidebar with account management, calendar, and filter options makes it easy to navigate and stay organized. Highly recommended.",
  },
  
];


export const Rating = ({ rating }) => {
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    const color = i < rating ? "#ffc107" : "#e4e5e9";
    stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{color}} />);
  }

  return <div>{stars}</div>;
};