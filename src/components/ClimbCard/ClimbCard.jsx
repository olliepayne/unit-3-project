import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import ClimbPage from '../../pages/ClimbPage/ClimbPage'
import './ClimbCard.css'

const ClimbCard = props => {
  const { allUsers, climb } = props

  const [owner, setOwner] = useState({})

  const findClimbOwner = () => {
    const result = allUsers.filter(user => user._id === climb.ownerID)
    setOwner(result[0])
  }

  useEffect(() => {
    findClimbOwner()
  }, [])

  return (
    <div className="climb-card">
      <Route
        exact path={`/routes/${climb.name}-${climb._id}`}
        render={() => <ClimbPage climb={climb}/>}
      />
      <div className="contents">
        <h4>{climb.name}</h4>
        <p>Type: {climb.type}, Grade: {climb.grade}, Location: {climb.location}</p>
        <br />
        <p>Submitted by: {owner.email}</p>
        <a href={`/routes/${climb.name}-${climb._id}`}>View</a>
      </div>
    </div>
  )
}

export default ClimbCard