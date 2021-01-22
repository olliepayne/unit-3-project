import { Route } from 'react-router-dom'
import ClimbPage from '../../pages/ClimbPage/ClimbPage'

const ClimbCard = props => {
  const { climb } = props

  return (
    <div className="climb-card">
      <Route
        exact path={`/routes/${climb.name}-${climb._id}`}
        render={() => <ClimbPage climb={climb}/>}
      />
      <h4>{climb.name}</h4>
      <p>Type: {climb.type}, Grade: {climb.grade}, Location: {climb.location}</p>
      <a href={`/routes/${climb.name}-${climb._id}`}>View</a>
    </div>
  )
}

export default ClimbCard