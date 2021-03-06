import { useEffect, useState } from "react"

const AddClimb = (props) => {
  const { user, boulderGrades, sportGrades, handleAddClimb } = props

  const [formData, setFormData] = useState({})
  const [climbType, setClimbType] = useState('Boulder')

  const handleChange = e => {
    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleTypeChange = e => {
    setClimbType(e.target.value)
    handleChange(e)
  }

  const handleSubmit = e => {
    e.preventDefault()

    let newData = formData
    newData['ownerID'] = user

    handleAddClimb(formData)
    setFormData({})
  }

  const updateForm = e => {
    let newData = formData
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="add-route-page">
      {user ?
        <form className="add-route-form" onSubmit={e => handleSubmit(e)}>
          <label>*Name</label>
          <input name="name" type="text" onChange={e => handleChange(e)} />
          <label>*Type</label>
          <select name="type" onChange={e => handleTypeChange(e)}>
            <option value="Boulder">Boulder</option>
            <option value="Sport">Sport</option>
          </select>
          <label>*Grade</label>
          {climbType === 'Boulder' ?
            <select name="grade" onChange={e => handleChange(e)}>
              {boulderGrades.map((grade, index) => (
                <option key={index} value={grade}>{grade}</option>
              ))}
            </select>
            :
            <select name="grade" onChange={e => handleChange(e)}>
              {sportGrades.map((grade, index) => (
                <option key={index} value={grade}>{grade}</option>
              ))}
            </select>
          }
          <label>*Location</label>
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