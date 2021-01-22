const ClimbCard = props => {
  const { climb } = props

  return (
    <div className="climb-card">
      <h4>{climb.name}</h4>
      <p>Type: {climb.type}, Grade: {climb.grade}, Location: {climb.location}</p>
      <a href={`/routes/${climb._id}`}>View</a>
    </div>
  )
}

export default ClimbCard