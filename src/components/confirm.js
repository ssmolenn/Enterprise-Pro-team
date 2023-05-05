import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 0c7502f (Connecting Register/Login page with database)

export default function AccountConfirm() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')

  const codeHandler = (event) => {
    setCode(event.target.value)
  }

  async function confirmRequest() {
    try {
<<<<<<< HEAD
      await fetch('http://localhost/team8/Api.php/confirm', {
=======
      await fetch('http://localhost/team8/api.php/confirm', {
>>>>>>> 0c7502f (Connecting Register/Login page with database)
        method: 'POST',
        body: JSON.stringify({
          code: code,
        }),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then((respose) => {
          if (respose.ok) {
            return respose.json()
          }
          throw new Error('error')
        })
        .then((data) => {
          if (data.status === 1) {
            navigate('/')
          } else {
            //set error
          }
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    confirmRequest()
  }

  return (
    <form className="register-form" onSubmit={submitHandler}>
      <h2>Confirm Code</h2>
      <label>Code</label>
      <input type="text" value={code} onChange={codeHandler} />
      <button>Confirm</button>
    </form>
  )
}