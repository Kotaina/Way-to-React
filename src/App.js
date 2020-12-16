import './App.css';
import { Component } from 'react';
// import { Search } from "./search.js";
// import { Table } from "./table.js";
// import { Button } from "./button.js";

const list = [
  {
    title: "React",
    url: "https:// ya.ru",
    author: "Stiven King",
    num_comments: 3,
    points: 5,
    objectID: 0
  },
  {
    title: "Vue",
    url: "https:// vuejs.org",
    author: "Name placeholder",
    num_comments: 1,
    points: 3,
    objectID: 1
  },
  {
    title: "Angular",
    url: "https://angular.ru",
    author: "IDK",
    num_comments: 8,
    points: 6,
    objectID: 0
  }
];

const Search = ({ value, onChange, children }) =>
  <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>

const Table = ({ list, pattern, onDismiss }) => {
  return (
    <div>
      {list.filter(isSearched(pattern)).map(item =>
        <div>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <Button
              onClick={() => onDismiss(item.objectID)}
            >
              Отбросить
                  </Button>
          </span>
        </div>
      )}
    </div>
  )
}

const Button = ({ onClick, className = "", children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>


const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList })
  }

  onSearchChange(evt) {
    this.setState({ searchTerm: evt.target.value })
  }

  render() {
    const { searchTerm, list } = this.state;

    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          Поиск
        />
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    )
  }
}


export default App;
