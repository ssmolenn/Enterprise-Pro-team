import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
<<<<<<< HEAD
      <h1>Rekusens. Sign Up/ Sign In to continue</h1>
=======
      <h1>Rakusens. Register/Login to continue</h1>
>>>>>>> 0c7502f (Connecting Register/Login page with database)
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