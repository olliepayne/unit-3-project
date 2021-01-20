import { useState } from "react"

const Login = (props) => {
  const { handleLogin } = props
  const [formData, setFormData] = useState({})

  const handleValue = (e) => {
    setFormData({ [e.target.name]: e.target.value })
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={() => handleLogin(formData)}>
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