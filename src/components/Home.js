import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>Rakusens. Register/Login to continue</h1>
      <div className="panel">
        <Link to="/register">Register</Link>
        {localStorage.getItem('token') ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Log Out</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  )
}