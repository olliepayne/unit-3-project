import { useState } from "react"

const boulderGrades = [
  'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15', 'V16'
]

const sportGrades = [
  '5.0', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10-', '5.10', '5.10+', '5.11-', '5.11', '5.11+', '5.12-', '5.12', '5.12+', '5.13-', '5.13', '5.13+',
  '5.14-', '5.14', '5.14+', '5.15-', '5.15', '5.15+'
]

const AddClimb = (props) => {
  const { user, handleAddClimb } = props

  const [formData, setFormData] = useState({})
  const [climbType, setClimbType] = useState('Boulder')

  const handleChange = e => {
    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleTypeChange = e => {
    setClimbType(e.target.value)

    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await handleAddClimb(formData)
    setFormData({})
  }

  return (
    <div className="add-route-page">
      {user ?
        <form className="add-route-form" onSubmit={e => handleSubmit(e)}>
          <label>Name</label>
          <input name="name" type="text" onChange={e => handleChange(e)} />
          <label>Type</label>
          <select name="type" onChange={e => handleTypeChange(e)}>
            <option value="Boulder">Boulder</option>
            <option value="Sport">Sport</option>
          </select>
          <label>Grade</label>
          {climbType === 'Boulder' ?
            <select>
              {boulderGrades.map((grade, index) => (
                <option key={index} value={grade}>{grade}</option>
              ))}
            </select>
            :
            <select>
              {sportGrades.map((grade, index) => (
                <option key={index} value={grade}>{grade}</option>
              ))}
            </select>
          }
          <label>Location</label>
          <input name="location" type="text" onChange={e => handleChange(e)} />
        <button>Submit</button>
      </form>
      :
      <p>You must be logged in to add a route!</p>
      }
    </div>
  )
}

export default AddClimb