import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <div>
      <header>
      <h1>Goose Track</h1>
     <Link to="/login">Sign up</Link>
      <Link to="/register">Log in </Link>
    </header>
    <main>
      <section>
      <ul>
        <li>
          <div>
          <h2>1.</h2>
            <h3>CALENDAR</h3>
            <h3>VIEW</h3>
            <span>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</span>
        </div>
        <div>
        <img src="images/1.png" alt="" />
        </div>
      </li>
        <li>
          <div>
          <h2>2.</h2>
            <h3>SIDEBAR</h3>
            <span>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</span>
        </div>
        <div>
          <img src="images/2.png" alt="" />
        </div>
      </li>
        <li>
          <div>
          <h2>3.</h2>
            <h3>ALL IN</h3>
            <h3>ONE</h3>
            <span>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</span>
        </div>
        <div>
        <img src="images/3.png" alt="" />
        </div>
      </li>        
      </ul>
      </section>
    </main>
      <section>
        <h2>REVIEWS</h2>        
      </section>
      </div>
    </>
  );
}



