import { useState } from 'react'
import './Signup.css'

const Signup = props => {
  const { handleSignup } = props

  const [formData, setFormData] = useState({})

  const [passwordMatch, setPasswordMatch] = useState(false)

  const handleChange = e => {
    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)

    if(formData['password'] === formData['passwordCheck']) {
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(passwordMatch) {
      handleSignup(formData)
    }
  }

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={e => handleSubmit(e)}>
        <label>Username</label>
        <input name="username" type="text" max="16" onChange={e => handleChange(e)} />
        <br />
        <label>*Email Address</label>
        <input name="email" type="text" onChange={e => handleChange(e)} />
        <br />
        <label>*Password</label>
        <input name="password" type="password" onChange={e => handleChange(e)} />
        <br />
        <label>*Confirm Password</label>
        {!passwordMatch ?
          <p className="password-error">Passwords do not match</p>
          :
          <>
          </>
        }
        <input name="passwordCheck" type="password" onChange={e => handleChange(e)} />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <a href="/login">Login</a>
    </div>
  )
}

export default Signup