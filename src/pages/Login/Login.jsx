import { useState } from "react"
import './Login.css'

const Login = (props) => {
  const { handleLogin } = props
  const [formData, setFormData] = useState({})

  const handleChange = e => {
    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleLogin(formData)
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={e => handleSubmit(e)}>
        <label>Email Address</label>
        <input name="email" type="text" onChange={e => handleChange(e)} />
        <br />
        <label>Password</label>
        <input name="password" type="password" onChange={e => handleChange(e)} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login