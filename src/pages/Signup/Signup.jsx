import { useState } from 'react'

const Signup = props => {
  const { handleSignup } = props

  const [formData, setFormData] = useState({})

  const [passwordMatch, setPasswordMatch] = useState(false)

  const handleChange = e => {
    if(e.target.name === 'passwordCheck') {
      const passwordCheckVal = e.target.value
      if(formData['password'] !== null) {
        if(passwordCheckVal === formData.password) {
          setPasswordMatch(true)
        } else {
          setPasswordMatch(false)
        }
      }
    }

    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleSubmit = e => {
    if(passwordMatch) {
      e.preventDefault()
      handleSignup(formData)
    }
  }

  return (
    <div className="signup-page">
      <form className="login-form" onSubmit={e => handleSubmit(e)}>
        <label>Username</label>
        <input name="username" type="text" onChange={e => handleChange(e)} />
        <br />
        <label>Email Address</label>
        <input name="email" type="text" onChange={e => handleChange(e)} />
        <br />
        <label>Password</label>
        <input name="password" type="password" onChange={e => handleChange(e)} />
        <br />
        <label>Confirm Password</label>
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