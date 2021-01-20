// import RoutePage from '../../components/RoutePage/RoutePage'

const RouteList = (props) => {
  const { routes } = props

  return (
    <div>
      <h1>All Routes</h1>
      <ul>
        {routes.map((route, index) => (
          <li key="index">
            <p>{route.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RouteList