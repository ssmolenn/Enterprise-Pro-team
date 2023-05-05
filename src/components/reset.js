<<<<<<< HEAD
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  async function resetRequest() {
    try {
      await fetch("http://localhost/team8/Api.php/reset", {
        method: "POST",
=======
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import React from "react";

export default function ResetPassword() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  async function resetRequest() {
    try {
      await fetch('http://localhost/team8/api.php/reset', {
        method: 'POST',
>>>>>>> 0c7502f (Connecting Register/Login page with database)
        body: JSON.stringify({
          username: username,
        }),
      })
        .then((respose) => {
          if (respose.ok) {
<<<<<<< HEAD
            return respose.json();
          }
          throw new Error("error");
        })
        .then((data) => {
          if (data.status) {
            navigate("/");
          } else {
            //set error
          }
        });
    } catch (error) {
      console.log(error.message);
=======
            return respose.json()
          }
          throw new Error('error')
        })
        .then((data) => {
          if (data.status) {
            navigate('/')
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
    resetRequest();
  };
=======
    event.preventDefault()
    resetRequest()
  }
>>>>>>> 0c7502f (Connecting Register/Login page with database)

  return (
    <form className="register-form" onSubmit={submitHandler}>
      <h2>Reset Password</h2>
      <label>Username or Email</label>
      <input type="text" value={username} onChange={usernameHandler} />
      <button>Reset Password</button>
      <Link to="/login">Login</Link>
    </form>
<<<<<<< HEAD
  );
}
=======
  )
}
>>>>>>> 0c7502f (Connecting Register/Login page with database)
