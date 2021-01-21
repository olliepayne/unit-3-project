import e from "cors"
import { useState } from "react"

const AddClimb = (props) => {
  const { handleAddRoute } = props

  const [formData, setFormData] = useState({})

  const handleChange = e => {
    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await handleAddRoute(formData)
    setFormData({})
  }

  return (
    <div className="add-route-page">
      <form className="add-route-form" onSubmit={e => handleSubmit(e)}>
        <label>Name</label>
        <input name="name" type="text" value={formData.name} onChange={e => handleChange(e)} />
        <label>Type</label>
        <input name="type" type="text" onChange={e => handleChange(e)} />
        <label>Grade</label>
        <input name="grade" type="text" onChange={e => handleChange(e)} />
        <label>Location</label>
        <input name="location" type="text" onChange={e => handleChange(e)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddClimb