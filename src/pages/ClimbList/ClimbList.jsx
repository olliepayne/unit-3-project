const ClimbList = props => {
  const { climbs } = props

  return (
    <div>
      <h1>All Routes</h1>
      {climbs.length > 0 ?
        <ul>
        {climbs.map((climb, index) => (
          <li key={index}>
            <p>{climb.name}</p>
          </li>
        ))}
        </ul>
        :
        <p>Loading Routes...</p>
      }
    </div>
  )
}

export default ClimbList