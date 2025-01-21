```javascript
//pages/about.js
function About() {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null; 
  return (
    <div>
      <h1>About Page</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default About; 
```