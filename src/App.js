import React from "react";
import "./App.css";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to

  componentDidMount() {
    fetch("https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          loaded: true,
        });
      })
      .then((data) => console.log(data));
  }
  render() {
    const { loaded, items } = this.state;
    if (!loaded)
      return (
        <div>
          <h1> Loading Time </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Films </h1>{" "}
        {items.films.map((film) => (
          <ul key={film.id}>
            <li>
              List-Tile: {items.title}, Tile: {film.title}, (
              {film.duration_seconds} )
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
