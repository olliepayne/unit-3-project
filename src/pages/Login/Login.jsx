import { useState } from "react"

const Login = (props) => {
  const { handleLogin } = props
  const [formData, setFormData] = useState({})

  const handleValue = (e) => {
    setFormData({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(formData)
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={e => handleSubmit(e)}>
        <label>email</label>
        <input name="email" type="text" onChange={e => handleValue(e)} />
        <label>password</label>
        <input name="password" type="text" onChange={e => handleValue(e)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login