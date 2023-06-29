import React, { useState } from "react";

import Home from "./Home";
import ComicBookPulls from "./ComicBookPulls";
import NewComicBook from "./NewComicBook";
import { Route, Switch } from "react-router-dom";

function App() {
  const [comics, setComics] = useState([]);

  function addComic(newComic) {
    setComics([...comics, newComic]);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/marvel">
          <ComicBookPulls comics={ comics } setComics={ setComics } />
        </Route>
        <Route path="/dc">
          <ComicBookPulls comics={ comics } setComics={ setComics } />
        </Route>
        <Route path="/image">
          <ComicBookPulls comics={ comics } setComics={ setComics } />
        </Route>
        <Route path="/addComic">
          <NewComicBook addComic={ addComic } />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
