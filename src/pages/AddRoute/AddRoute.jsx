import { useState } from "react"

const AddRoute = (props) => {
  const [formData, setFormData] = useState({})

  const handleChange = e => {
    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleSubmit = () => {

  }

  return (
    <div className="add-route-page">
      <form className="add-route-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" onChange={e => handleChange(e)} />
        <label>Type</label>
        <label>Grade</label>
        <label>Location</label>
      </form>
    </div>
  )
}

export default AddRoute