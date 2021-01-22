import './ClimbList.css'
import ClimbCard from '../../components/ClimbCard/ClimbCard'

const ClimbList = props => {
  const { allUsers, climbs } = props

  return (
    <div className="climb-list-page">
      <h1>All Routes</h1>
      {climbs.length > 0 ?
        <ul className="climb-card-container">
        {climbs.map((climb, index) => (
          <li key={index}><ClimbCard allUsers={allUsers} climb={climb} /></li>
        ))}
        </ul>
        :
        <p>Loading Routes...</p>
      }
    </div>
  )
}

export default ClimbList