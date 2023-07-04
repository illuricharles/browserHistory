import {Component} from 'react'
import SearchLists from '../SearchLists/index'
import './index.css'

class SearchHistory extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = title => console.log(title)

  render() {
    const {initialHistoryList} = this.props

    const {searchInput} = this.state

    const filterList = initialHistoryList.filter(eachList => {
      const tempList = {...eachList}
      const lowerCaseSearchInput = searchInput.toLowerCase()
      tempList.title = tempList.title.toLowerCase()
      return tempList.title.includes(lowerCaseSearchInput)
    })

    console.log(filterList)

    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-logo"
              alt="search"
            />
            <input
              type="search"
              className="user-input"
              placeholder="Search history"
              onChange={this.onSearch}
              value={searchInput}
            />
          </div>
        </div>
        <div className="history-container">
          <ul className="card-section">
            {initialHistoryList.map(eachList => (
              <SearchLists
                key={eachList.id}
                historyList={eachList}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchHistory
