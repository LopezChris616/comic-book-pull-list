import Home from "./Home";
import Navbar from "./Navbar";
import ComicBookPulls from "./ComicBookPulls";
import NewComicBook from "./NewComicBook";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/marvel">
          <ComicBookPulls />
        </Route>
        <Route path="/dc">
          <ComicBookPulls />
        </Route>
        <Route path="/image">
          <ComicBookPulls />
        </Route>
        <Route path="/addComic">
          <NewComicBook />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
