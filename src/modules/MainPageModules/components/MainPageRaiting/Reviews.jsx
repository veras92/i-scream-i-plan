import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Rating = ({ rating }) => {
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    const color = i < rating ? '#ffc107' : '#e4e5e9';
    stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color }} />);
  }

  return <div>{stars}</div>;
};
