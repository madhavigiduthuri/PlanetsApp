// Write your code here
import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {imageUrl, name, description} = data
  return (
    <div className="planetitem-wrap">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem
