// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogoUrl,
  } = cryptocurrencyDetails

  return (
    <li className="list-item">
      <div className="item-container">
        <img className="item-image" src={currencyLogoUrl} alt={currencyName} />
        <p className="item-topic">{currencyName}</p>
      </div>
      <div className="item-info">
        <p className="item-topic">{usdValue}</p>
        <p className="item-title">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
