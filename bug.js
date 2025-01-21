```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
function About() {
  //this will cause an error if you do not handle this edge case
  const user = JSON.parse(localStorage.getItem('user')); //potential error here
  return (
    <div>
      <h1>About Page</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default About; 
```