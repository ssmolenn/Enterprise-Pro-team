<<<<<<< HEAD
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const lastnameHandler = (event) => {
    setLastName(event.target.value);
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  async function registerRequest() {
    try {
      await fetch("http://localhost/team8/Api.php/register", {
        method: "POST",
=======
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const lastnameHandler = (event) => {
    setLastName(event.target.value)
  }

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  async function registerRequest() {
    try {
      await fetch('http://localhost/team8/api.php/register', {
        method: 'POST',
>>>>>>> 0c7502f (Connecting Register/Login page with database)
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          username: username,
          password: password,
          email: email,
        }),
      })
<<<<<<< HEAD
        .then((respose) => {
          if (respose.ok) {
            return respose.json();
          }
          throw new Error("error");
        })
        .then((data) => {
          if (data.status) {
            localStorage.setItem("token", data.status);
            navigate("/confirm");
          } else {
            //set error
          }
        });
    } catch (error) {
      console.log(error.message);
=======
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('error')
        })
        .then((data) => {
          if (data.status) {
            localStorage.setItem('token', data.status)
            navigate('/confirm')
          } else {
            //set error
          }
        })
    } catch (error) {
      console.log(error.message)
>>>>>>> 0c7502f (Connecting Register/Login page with database)
    }
  }

  const submitHandler = (event) => {
<<<<<<< HEAD
    event.preventDefault();
    registerRequest();
  };
=======
    event.preventDefault()
    registerRequest()
  }
>>>>>>> 0c7502f (Connecting Register/Login page with database)

  return (
    <form className="register-form" onSubmit={submitHandler}>
      <h2>Register</h2>
      <label>Name</label>
      <input type="text" value={name} onChange={nameHandler} />
      <label>Last Name</label>
      <input type="text" value={lastname} onChange={lastnameHandler} />
      <label>Username</label>
      <input type="text" value={username} onChange={usernameHandler} />
      <label>Password</label>
      <input type="password" value={password} onChange={passwordHandler} />
      <label>Email</label>
      <input type="text" value={email} onChange={emailHandler} />
      <button>Register</button>
      <Link to="/login">Login</Link>
    </form>
<<<<<<< HEAD
  );
}
=======
  )
}
>>>>>>> 0c7502f (Connecting Register/Login page with database)
