import { useState } from 'react'

const Signup = props => {
  const { handleSignup } = props

  const [formData, setFormData] = useState({})

  const handleChange = e => {
    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleSignup(formData)
  }

  return (
    <div className="signup-page">
      <form className="login-form" onSubmit={e => handleSubmit(e)}>
        <label>Email Address</label>
        <input name="email" type="text" onChange={e => handleChange(e)} />
        <br />
        <label>Password</label>
        <input name="password" type="password" onChange={e => handleChange(e)} />
        <br />
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