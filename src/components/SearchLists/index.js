import './index.css'

const SearchLists = props => {
  const {historyList, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDelete = () => {
    onDeleteHistory(title)
  }

  return (
    <li className="list-item">
      <div className="list-details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="delete-button-section"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default SearchLists
