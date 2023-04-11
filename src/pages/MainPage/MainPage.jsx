// Завдання для головної сторінки в ТЗ не бачу

import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <div>MainPage</div>
      <Link to="/login">Sign up</Link>
      <Link to="/register">Log in </Link>
    </>
  );
}
