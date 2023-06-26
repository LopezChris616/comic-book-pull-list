import Home from "./Home";
import Navbar from "./Navbar";
import ComicBookPulls from "./ComicBookPulls";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
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
      </Switch>
    </div>
  );
}

export default App;
